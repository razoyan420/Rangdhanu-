// ১. ফায়ারবেস লাইব্রেরি ইমপোর্ট (এখানে স্টোরেজ বাদ দেওয়া হয়েছে)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// ২. আপনার ফায়ারবেস কনফিগারেশন (আপনার অরিজিনাল কোডটি এখানে বসান)
const firebaseConfig = {
  apiKey: "AIzaSyBD5qAvkO3YNePZx_Roqni4qLQYLSDLBO0", // আপনারটা বসাবেন
  authDomain: "rangdhanu-test.firebaseapp.com",
  projectId: "rangdhanu-test",
  storageBucket: "rangdhanu-test.firebasestorage.app",
  messagingSenderId: "287810263313",
  appId: "1:287810263313:web:948f745c049a007df814b0"
};

// ফায়ারবেস ইনিশিয়ালাইজেশন
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ৩. আপনার গুগল অ্যাপস স্ক্রিপ্ট লিংক
const scriptUrl = 'https://script.google.com/macros/s/AKfycbwDCWK6lftcJdbaRfPIMV--FgyP8fLLzeLCphFrtBKOJL32WzERUOMsODUXK5hTKaKJyg/exec';

// ৪. ইমেজ কম্প্রেসর ফাংশন
const compressImage = async (file, maxWidth = 800, quality = 0.7) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                if (width > maxWidth) {
                    height = Math.round((height * maxWidth) / width);
                    width = maxWidth;
                }
                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                canvas.toBlob((blob) => { resolve(blob); }, file.type, quality);
            };
        };
        reader.onerror = (error) => reject(error);
    });
};

// ৫. ছবিকে Base64 এ রূপান্তর করার ফাংশন (গুগল ড্রাইভে পাঠানোর জন্য)
const convertToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            const base64data = reader.result.split(',')[1];
            resolve(base64data);
        };
        reader.onerror = reject;
    });
};

// ৬. ফর্ম সাবমিট ইভেন্ট হ্যান্ডেল করা
const regForm = document.getElementById('regForm');
const submitBtn = document.getElementById('submitBtn');
const statusMessage = document.getElementById('statusMessage');

regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    submitBtn.disabled = true;
    statusMessage.style.color = "#007bff";
    statusMessage.innerText = "ছবি কম্প্রেস করা হচ্ছে...";

    try {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const imageFile = document.getElementById('image').files[0];

        // ছবি কম্প্রেস ও Base64 এ কনভার্ট করা
        const compressedBlob = await compressImage(imageFile);
        const base64Data = await convertToBase64(compressedBlob);
        
        statusMessage.innerText = "গুগল ড্রাইভে ছবি আপলোড হচ্ছে...";

        // গুগল ড্রাইভে ছবি পাঠানো (Apps Script এর মাধ্যমে)
        const response = await fetch(scriptUrl, {
            method: 'POST',
            body: JSON.stringify({
                name: Date.now() + '_' + imageFile.name,
                type: imageFile.type,
                base64: base64Data
            })
        });

        const result = await response.json();

        if (result.success) {
            statusMessage.innerText = "ফায়ারবেসে ডাটা সেভ হচ্ছে...";

            // ফায়ারবেস ফায়ারস্টোরে (ডাটাবেজ) তথ্য সেভ
            await addDoc(collection(db, "members"), {
                fullName: name,
                phoneNumber: phone,
                profilePicUrl: result.imageUrl, // গুগল ড্রাইভ থেকে পাওয়া লিংক
                timestamp: new Date()
            });

            statusMessage.style.color = "green";
            statusMessage.innerText = "রেজিস্ট্রেশন সফলভাবে সম্পন্ন হয়েছে!";
            regForm.reset();
        } else {
            throw new Error(result.error);
        }

    } catch (error) {
        console.error("Error: ", error);
        statusMessage.style.color = "red";
        statusMessage.innerText = "কোথাও কোনো সমস্যা হয়েছে। আবার চেষ্টা করুন।";
    } finally {
        submitBtn.disabled = false;
    }
});
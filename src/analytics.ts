import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD844LM5vkiqWERCXE-x0fr4pAidK7_B-Y",
    authDomain: "paint-on-chain.firebaseapp.com",
    projectId: "paint-on-chain",
    storageBucket: "paint-on-chain.appspot.com",
    messagingSenderId: "135095731128",
    appId: "1:135095731128:web:99aaa4c926cde542ee854d",
    measurementId: "G-SCHS73LSZS"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
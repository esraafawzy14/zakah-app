import React, { useState } from "react";
import "./Main.css";

export default function Zkmoney() {
    const [money, setMoney] = useState(0);
    const [gold, setGold] = useState(0);
    const [total, setTotal] = useState("0 جنيه مصري");
    const [error, setError] = useState("");

    const moneyChange = (event) => {
        setMoney(event.target.value);
    };

    const goldChange = (event) => {
        setGold(event.target.value);
    };

    function calculateTotal2() {
        if (!money || !gold || isNaN(money) || isNaN(gold) || money <= 0 || gold <= 0) {
            setError("الرجاء إدخال مبلغ مدخر وسعر ذهب صحيحين");
            return;
        }
        setError(""); 

        let nisab = 85 * gold;
        if (money >= nisab) {
            setTotal(money * 0.025 + " جنيه مصري");
        } else {
            setTotal("لا زكاة عليك");
        }
    }

    return (
        <div className="zk-container">
            <div className="zk-money">
                <h2 className="zk-fitr1">زكاة الأموال</h2>
                <p className="zk2">
                    تجب إذا بلغ نصابها ما قيمته خمسة وثمانون جرامًا من الذهب عيار واحد وعشرين، بواقع (2.5%) نسبة الزكاة حسب الحول القمري، أو (2.577) حسب الحول الشمسي.
                    ويُضَمُّ المال المدخر في المنزل إلى المُدَّخر في البنوك أو الأسهم أو الذهب المدخر عند احتساب زكاة المال
                </p>
                {error && <p className="zk-error">{error}</p>}
                <div className="zk-inputs"> 
                    <input type="number" value={money || ""} onChange={moneyChange} placeholder="المبلغ المدخر" />
                    <input type="number" value={gold || ""} onChange={goldChange} placeholder="سعر جرام الذهب اليوم" />
                </div>
                <div className="zk-button">
                    <button className="zk-btn1" onClick={calculateTotal2}>حساب الزكاة</button>
                    <h3>الزكاة: {total}</h3>
                </div>
            </div>
        </div>
    );
}

import React, { useState} from "react";
import "./Main.css";

export default function Zkgs() {

    const [gold, setGold] = useState(0);
    const [goldprice, setGoldPrice] = useState(0);
    const [silver, setSilver] = useState(0);
    const [silverprice, setSilverPrice] = useState(0);
    const [totalg, setTotalg] = useState("0 جنيه مصري");
    const [totals, setTotals] = useState("0 جنيه مصري");
    const [error, setError] = useState(""); 

    const goldChange = (event) => {
        setGold(event.target.value);
    };

    const silverChange = (event) => {
        setSilver(event.target.value);
    };

    const goldPriceChange = (event) => {
        setGoldPrice(event.target.value);
    };

    const silverPriceChange = (event) => {
        setSilverPrice(event.target.value);
    };

    function calculateTotals() {
        if (!gold || !goldprice || isNaN(gold) || isNaN(goldprice) || gold <= 0 || goldprice <= 0) {
            setError("الرجاء إدخال قيمة الذهب وسعره بشكل صحيح");
            return;
        }
        setError(""); 

        let nisab = 85; 
        if (gold >= nisab) {
            setTotals((gold * goldprice * 0.025) + " جنيه مصري");
        } else {
            setTotals("لا زكاة عليك");
        }
    }

    function calculateTotalg() {
        if (!silver || !silverprice || isNaN(silver) || isNaN(silverprice) || silver <= 0 || silverprice <= 0) {
            setError("الرجاء إدخال قيمة الفضة وسعرها بشكل صحيح");
            return;
        }
        setError(""); 

        let nisab = 595; 
        if (silver >= nisab) {
            setTotalg((silver * silverprice * 0.025) + " جنيه مصري");
        } else {
            setTotalg("لا زكاة عليك");
        }
    }

    return (
        <div className="zk-container">
            <div className="zk-fitr">
                <h2 className="zk-fitr1">زكاة الذهب والفضة</h2>
                <p className="zk2">
                تجب الزكاة في الذهب والفضة عند مرور الحول عليها أي مرور سنة هجرية كاملة من امتلاك الذهب أو الفضة وبلوغ النصاب وهو الحد الأدنى للزكاة حيث يكون نصاب الذهب 85 جرامًا من الذهب الخالص، ونصاب الفضة 595 جرامًا من الفضة الخالصة.
                الذهب المُستخدم للزينة لا زكاة عليه عند بعض العلماء، بينما الذهب المُدَّخر أو المُستخدم للتجارة تجب فيه الزكاة. أما الفضة، فتجب زكاتها سواء كانت حُليًّا أو نقودًا أو سبائك إذا بلغت النصاب.
                ويتم حساب الزكاة بنسبة 2.5%  من إجمالي قيمة الذهب أو الفضة.
                </p>

                {error && <p className="zk-error">{error}</p>} 

                <div className="zk-inputs">
                    <input type="number" min="1" value={gold || ""} onChange={goldChange} placeholder="قيمة الذهب بالجرام" />
                    <input type="number" min="1" value={goldprice || ""} onChange={goldPriceChange} placeholder="سعر الذهب بالجرام" />
                </div>
                <div className="zk-button">
                    <button className="zk-btn1" onClick={calculateTotals}>حساب زكاة الذهب</button>
                    <h3>الزكاة: {totals}</h3>
                </div>
                <div className="zk-inputs">
                    <input type="number" min="1" value={silver || ""} onChange={silverChange} placeholder="قيمة الفضة بالجرام" />
                    <input type="number" min="1" value={silverprice || ""} onChange={silverPriceChange} placeholder="سعر الفضة بالجرام" />
                </div>
                <div className="zk-button">
                    <button className="zk-btn1" onClick={calculateTotalg}>حساب زكاة الفضة</button>
                    <h3>الزكاة: {totalg}</h3>
                </div>
            </div>
        </div>
    );
}

import React, { useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";

export default function Zkani() {
  const [count, setCount] = useState("");
  const [totalc, setTotalc] = useState("");
  const [totalcc, setTotalcc] = useState("");
  const [totalccc, setTotalccc] = useState("");
  const [error, setError] = useState("");

  
  const countChange = (event) => {
    setCount(Number(event.target.value));
  };

  
  const input = () => {
    if (!count || isNaN(count) || count <= 0) {
        setError("الرجاء إدخال عدد صحيح للأنعام");
        return false;
    }

    setError("");
    return true;
};


  function calculateZakatc() {
    if (!input()) {
      setTotalc("");
      return;
    }
    let result1 = "لا زكاة عليك";
    if (count >= 1 && count <= 4) result1 = "لا زكاة عليك";
    else if (count >= 5 && count <= 9) result1 = "شاة واحدة";
    else if (count >= 10 && count <= 14) result1 = "شاتان";
    else if (count >= 15 && count <= 19) result1 = "ثلاث شياه";
    else if (count >= 20 && count <= 24) result1 = "أربع شياه";
    else if (count >= 25 && count <= 35) result1 = "بنت مخاض";
    else if (count >= 36 && count <= 45) result1 = "بنت لبون";
    else if (count >= 46 && count <= 60) result1 = "حقه";
    else if (count >= 61 && count <= 75) result1 = "جذعة";
    else if (count >= 76 && count <= 90) result1 = "بنتا لبون";
    else if (count >= 91 && count <= 120) result1 = "حقتان";
    else if (count >= 121 && count <= 129) result1 = "ثلاث بنات لبون";
    else if (count >= 140 && count <= 149) result1 = "حقتان + بنت لبون";
    else if (count >= 150 && count <= 159) result1 = "ثلاث حقاق";
    else if (count >= 160 && count <= 169) result1 = "أربع بنات لبون";
    else if (count >= 170 && count <= 179) result1 = "ثلاث بنات لبون + حقه";
    else if (count >= 180 && count <= 189) result1 = "بنتا لبون + حقتان";
    else if (count >= 190 && count <= 199) result1 = "ثلاث حقاق + بنت لبون";
    else if (count >= 200 && count <= 209) result1 = "أربع حقاق أو خمس بنات لبون";
     else{
     let haqqa = Math.floor(count / 50);
     let bintLaboon = Math.floor(count / 40);
     let remainder40 = count % 40;
     let remainder50 = count % 50;

     if (remainder40 === 0 && remainder50 === 0) {
       result1 = `${bintLaboon} بنت لبون أو ${haqqa} حقة`;
     } else if (remainder40 !== 0 && remainder50 !== 0) {
       result1 = remainder40 < remainder50 ? `${bintLaboon} بنت لبون` : `${haqqa} حقة`;
     } else {
       result1 = remainder40 === 0 ? `${bintLaboon} بنت لبون` : `${haqqa} حقة`;
     }
    }
    
    setTotalc(result1);
  }

  function calculateZakatcc() {
    if (!input()) {
      setTotalcc("");
      return;
    }
    let result2 = "لا زكاة عليك";
    if (count >= 1 && count <= 29) result2 = "لا زكاة عليك";
    else if (count >= 30 && count <= 39) result2 = "تبيع (عجل أتم سنة)";
    else if (count >= 40 && count <= 59) result2 = "مسنة (أنثى بقر أتمت سنتين)";
    else if (count >= 60 && count <= 69) result2 = "تبيعان أو تبيعتان";
    else if (count >= 70 && count <= 79) result2 = "مسنة وتبيع";
    else if (count >= 80 && count <= 89) result2 = "مسنتان";
    else if (count >= 90 && count <= 99) result2 = "ثلاثة أتبعة";
    else if (count >= 100 && count <= 109) result2 = "مسنة وتبيعان";
    else if (count >= 110 && count <= 119) result2 = "مسنتان وتبيع";
    else if (count >= 120 && count <= 129) result2 = "ثلاث مسنات أو أربعة أتبعة";
     else{
     let mosna = Math.floor(count / 40);
     let tabee = Math.floor(count / 30);
     let remainder40 = count % 40;
     let remainder30 = count % 30;

     if (remainder30 === 0 && remainder40 === 0) {
       result2 = `${mosna} مسنة أو ${tabee} تبيع`;
     } else if (remainder30 !== 0 && remainder40 !== 0) {
       result2 = remainder30 < remainder40 ? `${mosna} مسنة` : `${tabee} تبيع`;
     } else {
       result2 = remainder40 === 0 ? `${mosna} مسنة` : `${tabee} تبيع`;
     }
    }
    setTotalcc(result2);
  }

  function calculateZakatccc() {
    if (!input()) {
      setTotalccc("");
      return;
    }
    let result3 = "لا زكاة عليك";
    if (count >= 1 && count <= 39) result3 = "لا زكاة عليك";
    else if (count >= 40 && count <= 120) result3 = "شاة واحدة";
    else if (count >= 121 && count <= 200) result3 = "شاتان";
    else if (count >= 201 && count <= 399) result3 = "ثلاث شياه";
    else if (count >= 400 && count <= 499) result3 = "أربع شياه";
    else if (count >= 500 && count <= 599) result3 = "خمس شياه";
    else{
    let goat = Math.floor(count / 100);
     result3 = `${goat} شاة`;
    }
    setTotalccc(result3);
  }
  
  return (
    <div className="zk-container">
      <div className="zk-fitr">
        <h2 className="zk-fitr1"> زكاة الأنعام</h2>
        <p className="zk2">
        زكاة الأنعام أو زكاة النعم هي الزكاة الواجبة في المواشي من النعم، (الإبل، البقر، الغنم) وهي تختلف حسب نوع النعم وعددها.وتجب زكاة الأنعام إذا بلغت النعم النصاب وحال عليهاالحول
        </p>
        {error && <p className="zk-error">{error}</p>}
        <div className="zk-inputs">
          <input
            type="Number"
            min="1"
            value={count}
            onChange={countChange}
            placeholder="عدد الأنعام"
          />
      
        </div>
        <div className="zk-button">
          <button className="zk-btn1" onClick={calculateZakatc}>
            حساب زكاة الإبل
          </button>
          <h3>الزكاة: {totalc}</h3>
        </div>
        <div className="zk-button">
          <button className="zk-btn1" onClick={calculateZakatcc}>
            حساب زكاة البقر
          </button>
          <h3>الزكاة: {totalcc}</h3>
        </div>
        <div className="zk-button">
          <button className="zk-btn1" onClick={calculateZakatccc}>
            حساب زكاة الغنم
          </button>
          <h3>الزكاة: {totalccc}</h3>
        </div>  
      </div>
      <div className="zk-button">
        <Link to="/Zk-ani2">
          <button className="zk-btn1">مصطلحات الأنعام</button>
        </Link>
      </div>
    </div>
  );
}

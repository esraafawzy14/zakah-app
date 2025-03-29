import React, { useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";

export default function Zkpl() {
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [ray, setRay] = useState("بدون كلفة");
  const [total, setTotal] = useState("");
  const [total1, setTotal1] = useState("");
  const [error, setError] = useState("");

  const amountChange = (event) => {
    setAmount(event.target.value);
  };

  const priceChange = (event) => {
    setPrice(event.target.value);
  };

  const rayChange = (event) => {
    setRay(event.target.value);
  };

  const calculate = () => {
    if (!amount || !price || isNaN(amount) || isNaN(price) || amount <= 0 || price <= 0) {
      setError("الرجاء إدخال كمية المحصول وسعر الكيلو بشكل صحيح");
      return;
    }
    setError(""); 

    const nkg = Number(amount);
    const Price1 = Number(price);
    let percentage;
    if (ray === "بدون كلفة") {
      percentage = 10;
    } else if (ray === "بكلفة") {
      percentage = 5;
    } else if (ray === "مناصفة") {
      percentage = 7.5;
    } else {
      percentage = 0;
    }
    const nisab = 653;
    if (nkg < nisab) {
      setTotal("لا زكاة عليك");
      setTotal1("لا زكاة عليك");
      return;
    }
    const zakatKg = nkg * (percentage / 100);
    const zakatMoney = zakatKg * Price1;
    setTotal(`${zakatKg} كجم`);
    setTotal1(`${zakatMoney} جنيه مصري`);
  };

  return (
    <div className="zk-container">
      <div className="zk-fitr">
        <h2 className="zk-fitr1"> زكاة الزروع والثمار</h2>
        <p className="zk2">
          لا يراعى الحول في زكاة الزروع، بل يراعى الموسم والمحصول لقوله عز وجل: «وآتوا حقه يوم حصاده». 
          فلو أخرجت الأرض أكثر من محصول في السنة وجب على صاحبها إخراج الزكاة عن كل محصول.
          نصابها خمسة أوسق (الوسق يساوي ستين صاعاً، والصاع مكيال مكعب طول حرفه 14.6 سم).
          جاء في الحديث الصحيح: «ليس فيما دون خمسة أوسق صدقة» والخمسة أوسق تعادل ما وزنه (653) كيلوجراما من القمح ونحوه.
        </p>

        {error && <p className="zk-error">{error}</p>} 

        <div className="zk-inputs">
          <input
            type="number"
            value={amount}
            onChange={amountChange}
            placeholder="كمية المحصول (كجم)"
          />
          <input
            type="number"
            value={price}
            onChange={priceChange}
            placeholder="سعر الكيلو (جنيه)"
          />
        </div>
        <select className="zk-select" value={ray} onChange={rayChange}>
          <option value="بدون كلفة">بدون كلفة (10%)</option>
          <option value="بكلفة">بكلفة (5%)</option>
          <option value="مناصفة">مناصفة (7.5%)</option>
        </select>
        <div className="zk-button">
          <button className="zk-btn1" onClick={calculate}>
            حساب الزكاة
          </button>
          <h3>مقدار الزكاة: {total}</h3>
          <h3>قيمة الزكاة: {total1}</h3>
        </div>
      </div>
    </div>
  );
}

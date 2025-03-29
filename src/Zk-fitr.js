
import React, { useState } from "react";
import "./Main.css";

export default function Zkfitr() {
  const foodTypes = [
    { id: "rice", name: "الأرز", weightPerSaa: 2.8 },
    { id: "wheat", name: "الدقيق", weightPerSaa: 2.75 },
    { id: "qamh", name: "القمح", weightPerSaa: 2.04 },
    { id: "zebeb", name: "الزبيب", weightPerSaa: 2.2 },
    { id: "fool", name: "الفول", weightPerSaa: 2.5 },
    { id: "fasolia", name: "الفاصوليا", weightPerSaa: 2.75 },
    { id: "lopia", name: "اللوبيا", weightPerSaa: 2.65 },
    { id: "lentils", name: "العدس", weightPerSaa: 2.65 },
    { id: "pasta", name: "المكرونة", weightPerSaa: 2.75 },
  ];

  const [selectedFood, setSelectedFood] = useState(foodTypes[0].id);
  const [price, setPrice] = useState(0);
  const [person, setPerson] = useState(0);
  const [total, setTotal] = useState(0);
  const [total1, setTotal1] = useState(0);
  const [error, setError] = useState("");

  const handleFoodChange = (event) => {
    setSelectedFood(event.target.value);
    setError("");
  };

  const priceChange = (event) => {
    setPrice(Number(event.target.value));
    setError("");
  };

  const personChange = (event) => {
    setPerson(Number(event.target.value));
    setError("");
  };

  const getSaaWeight = () => {
    return (
      foodTypes.find((food) => food.id === selectedFood)?.weightPerSaa || 3
    );
  };

  const getSelectedFoodName = () => {
    return (
      foodTypes.find((food) => food.id === selectedFood)?.name || "القوت المحدد"
    );
  };

  const calculateTotal = () => {
    if (!validateInputs()) return;

    const weight = Number(getSaaWeight());
    const pricePerKg = Number(price);
    const peopleCount = Number(person);

    if (isNaN(weight) || isNaN(pricePerKg) || isNaN(peopleCount)) {
      setError("تأكد من إدخال القيم بشكل صحيح");
      return;
    }

    const rawTotal = pricePerKg * weight * peopleCount;
    const flooredTotal = Math.floor(rawTotal);

    setTotal(flooredTotal);
  };

  const calculateTotal1 = () => {
    if (!validateInputs()) return;

    const weight = Number(getSaaWeight());
    const peopleCount = Number(person);

    if (isNaN(weight) || isNaN(peopleCount)) {
      setError("تأكد من إدخال القيم بشكل صحيح");
      return;
    }

    setTotal1(Math.floor(peopleCount * weight));
  };

  const validateInputs = () => {
    if (!price || isNaN(price) || price <= 0) {
      setError("الرجاء إدخال سعر صحيح للقوت");
      return false;
    }

    if (!person || isNaN(person) || person <= 0) {
      setError("الرجاء إدخال عدد صحيح للأفراد");
      return false;
    }

    setError("");
    return true;
  };

  return (
    <div className="zk-container">
      <div className="zk-fitr">
        <h2 className="zk-fitr1">زكاة الفطر</h2>
        <p className="zk2">
          يجب إخراج زكاة الفطر من لحظة غروب الشمس في آخر يوم من رمضان وحتى خروج
          الناس إلى صلاة عيد الفطر صباح اليوم التالي، فإن تأخرت عن ذلك فهي صدقة
          من الصدقات العادية. ويجوز تقديم إخراجها قبل حلول العيد بيوم أو يومين.
        </p>
        <p>الصاع يختلف وزنه حسب نوع القوت.</p>
<div className="zk-inputs2">
        <div className="zk-inputs1">
          <select
            className="zk-select"
            value={selectedFood}
            onChange={handleFoodChange}
          >
            {foodTypes.map((food) => (
              <option key={food.id} value={food.id}>
                {food.name} ({food.weightPerSaa} كجم للصاع)
              </option>
            ))}
          </select>

          <input
            type="number"
            min="1"
            value={price || ""}
            onChange={priceChange}
            placeholder={`سعر الكيلوجرام من  ${getSelectedFoodName()}`}
          />
        </div>
      
        <input
          type="number"
          min="1"
          value={person || ""}
          onChange={personChange}
          placeholder="عدد أفراد الأسرة"
        />
</div>
        {error && <p className="zk-error">{error}</p>}

        <div className="zk-button">
          <button className="zk-btn1" onClick={calculateTotal1}>
            حساب الكمية المطلوبة من الطعام
          </button>
          <h3>
            الزكاة:{" "}
            {total1 > 0 ? `${total1} كيلو من ${getSelectedFoodName()}` : ""}
          </h3>

          <button className="zk-btn1" onClick={calculateTotal}>
            حساب الزكاة نقدًا
          </button>
          <h3>الزكاة: {total > 0 ? total + " جنيه مصري" : ""}</h3>
          <p>مع استحباب الزيادة عن هذا المبلغ أو القدر لمن أراد</p>
        </div>
      </div>
    </div>
  );
}


import React from "react";
import "./Main.css";
import { Link, Links } from "react-router-dom";

export default function Main() {
   
    return (
        <div className="main">
     <h3 className="ayah">"وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَأَقْرِضُوا اللَّهَ قَرْضًا حَسَنًا ۚ وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ هُوَ خَيْرًا وَأَعْظَمَ أَجْرًا"</h3>
    <p className="zk1">الزكاة هي فريضة إسلامية تهدف إلى تطهير الأموال، وهي واجبة على كل مسلم يمتلك نصابًا معينًا.
         من خلال الزكاة، يتم توزيع جزء من المال على الفقراء والمحتاجين، مما يعزز التضامن الاجتماعي ويحقق العدالة بين أفراد المجتمع. الزكاة ليست فقط عبادة، بل وسيلة لزيادة البركة في المال وتطهير النفس من البخل.</p>
        <div className="zk-btns">

        <Link to="/Zk-fitr"><button className="zk-btn">حساب زكاة الفطر</button></Link>
        <Link to="/Zk-money"><button className="zk-btn">حساب زكاة الأموال</button></Link>
        <Link to="/Zk-gs"><button className="zk-btn">حساب زكاة الذهب والفضة</button></Link>
      <Link to="/Zk-pl" > <button className="zk-btn">حساب زكاة الزروع والثمار</button></Link>
       <Link to="/Zk-ani"><button className="zk-btn">حساب زكاة الأنعام</button> </Link>
        <Link to="/Zk-bus"><button className="zk-btn">حساب زكاة التجارة</button></Link>
        </div>
        </div>
    );
}

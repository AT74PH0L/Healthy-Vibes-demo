import Navbar from "../components/Navbar";
import "./CalorieCalculator.css";
import { useState } from "react";

const CalorieCalculator = () => {
  const [gender, setGender] = useState("male"); // male หรือ female
  const [weight, setWeight] = useState(""); // น้ำหนัก (kg)
  const [height, setHeight] = useState(""); // ส่วนสูง (cm)
  const [age, setAge] = useState(""); // อายุ (ปี)
  const [activityLevel, setActivityLevel] = useState(1.2); // ระดับกิจกรรม
  const [bmr, setBMR] = useState(null);
  const [tdee, setTDEE] = useState(null);
  const [selectedFoods, setSelectedFoods] = useState({});

  const foodMenu = [
    { name: "ข้าวมันไก่", calories: 600 },
    { name: "ผัดกะเพราไก่", calories: 450 },
    { name: "ส้มตำไทย", calories: 250 },
    { name: "ไข่เจียวหมูสับ", calories: 350 },
    { name: "ก๋วยเตี๋ยวเรือ", calories: 300 },
  ];

  const updateFoodCount = (food, change) => {
    setSelectedFoods((prev) => {
      const newCount = (prev[food.name] || 0) + change;
      if (newCount < 0) {
        return prev; 
      }
      return { ...prev, [food.name]: newCount };
    });
  };

  const resetSelection = () => {
    setSelectedFoods({});
  };

  // คำนวณแคลอรี่รวม
  const totalCalories = Object.entries(selectedFoods).reduce(
    (sum, [foodName, count]) => {
      const food = foodMenu.find((f) => f.name === foodName);
      return sum + food.calories * count;
    },
    0
  );
  // เปลี่ยนเพศ
  const toggleGender = () => {
    setGender(gender === "male" ? "female" : "male");
  };

  // คำนวณ BMR & TDEE
  const calculateCalories = () => {
    if (!weight || !height || !age) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    let calculatedBMR = 0;
    if (gender === "male") {
      calculatedBMR = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
    } else {
      calculatedBMR = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
    }

    const calculatedTDEE = calculatedBMR * activityLevel;
    setBMR(calculatedBMR.toFixed(2));
    setTDEE(calculatedTDEE.toFixed(2));
  };

  return (
    <>
      <Navbar />
      <div className="calorie-container">
        <div className="container">
          <div className="content">
            <h1 className="display-4">
              <span>วันนี้</span> คุณกินอาหารไปกี่แคลแล้วนะ?
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="mt-4">
            <div className="calculator-form mt-5 p-4 bg-white shadow rounded">
              <h2 className="text-center mb-4">คำนวณพลังงานที่ต้องการต่อวัน</h2>

              <div className="gender-toggle d-flex justify-content-center mb-3">
                <button
                  className={`btn ${
                    gender === "male" ? "btn-primary" : "btn-outline-primary"
                  }`}
                  onClick={toggleGender}
                >
                  ชาย
                </button>
                <button
                  className={`btn ${
                    gender === "female" ? "btn-danger" : "btn-outline-danger"
                  } ms-2`}
                  onClick={toggleGender}
                >
                  หญิง
                </button>
              </div>

              <div className="row g-3">
                <div className="col-md-4">
                  <label>น้ำหนัก (kg)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label>ส่วนสูง (cm)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label>อายุ (ปี)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-3">
                <label>ระดับกิจกรรม</label>
                <select
                  className="form-select"
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(parseFloat(e.target.value))}
                >
                  <option value="1.2">ไม่ออกกำลังกาย</option>
                  <option value="1.375">
                    ออกกำลังกายเบาๆ (1-3 ครั้ง/สัปดาห์)
                  </option>
                  <option value="1.55">
                    ออกกำลังกายปานกลาง (3-5 ครั้ง/สัปดาห์)
                  </option>
                  <option value="1.725">
                    ออกกำลังกายหนัก (6-7 ครั้ง/สัปดาห์)
                  </option>
                  <option value="1.9">ออกกำลังกายหนักมาก</option>
                </select>
              </div>

              <div className="text-center mt-4">
                <button
                  className="btn btn-success px-4 py-2 btn-custom"
                  onClick={calculateCalories}
                >
                  คำนวณ
                </button>
              </div>

              {bmr && tdee && (
                <div className="result mt-4 text-center">
                  <h4>BMR: {bmr} kcal</h4>
                  <h4>TDEE: {tdee} kcal</h4>
                </div>
              )}
              <div className="mt-4 p-4 bg-light rounded">
                <h3 className="text-center">เลือกเมนูอาหารที่คุณกิน</h3>
                <div className="text-center mt-3">
                  <h4>แคลอรี่รวมจากเมนูที่เลือก: {totalCalories} kcal</h4>
                  <button
                    className="btn btn-warning mt-2 mb-2"
                    onClick={resetSelection}
                  >
                    รีเซ็ต
                  </button>
                </div>
                <div className="food-selection">
                  {foodMenu.map((food, index) => (
                    <div
                      key={index}
                      className="d-flex align-items-center justify-content-between mb-2 p-2 border rounded"
                    >
                      <span>
                        {food.name} ({food.calories} kcal)
                      </span>
                      <div>
                        <button
                          className="btn btn-outline-danger btn-sm mx-1"
                          onClick={() => updateFoodCount(food, -1)}
                        >
                          -
                        </button>
                        <span>{selectedFoods[food.name] || 0}</span>
                        <button
                          className="btn btn-outline-success btn-sm mx-1"
                          onClick={() => updateFoodCount(food, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalorieCalculator;

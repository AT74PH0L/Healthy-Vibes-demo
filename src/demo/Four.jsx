import Navbar from "../components/Navbar";

const Four = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-success fw-bold text-center">💪 เคล็ดลับการดูแลสุขภาพให้แข็งแรง</h1>

        <img
          src="https://images.unsplash.com/photo-1529662795444-4a44b7a29db1?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Healthy Lifestyle"
          className="img-fluid rounded d-block mx-auto my-4"
          style={{ width: "80%", height: "250px", objectFit: "cover" }}
        />

        <p>
          สุขภาพที่ดีไม่ได้มาจากโชคช่วย แต่เกิดจากการดูแลตัวเองเป็นประจำ  
          การกินอาหารที่มีประโยชน์ ออกกำลังกาย และพักผ่อนให้เพียงพอ  
          ล้วนมีผลต่อคุณภาพชีวิตของเราในระยะยาว  
        </p>

        <h3 className="text-primary mt-4">🥗 อาหารที่ดีต่อสุขภาพ</h3>
        <ul>
          <li>รับประทานผักและผลไม้ให้มากขึ้น</li>
          <li>ลดน้ำตาลและอาหารแปรรูป</li>
          <li>ดื่มน้ำสะอาดอย่างน้อยวันละ 8 แก้ว</li>
          <li>กินโปรตีนที่ดี เช่น ปลา ไข่ ถั่ว และเนื้อสัตว์ไม่ติดมัน</li>
        </ul>

        <h3 className="text-danger mt-4">🏋️‍♂️ การออกกำลังกาย</h3>
        <p>การออกกำลังกายช่วยเสริมสร้างระบบภูมิคุ้มกันและลดความเครียด:</p>
        <ul>
          <li>ออกกำลังกายอย่างน้อย 30 นาทีต่อวัน</li>
          <li>เลือกกิจกรรมที่ชอบ เช่น วิ่ง ว่ายน้ำ หรือโยคะ</li>
          <li>ทำกิจกรรมกลางแจ้งเพื่อรับวิตามิน D</li>
        </ul>

        <h3 className="text-warning mt-4">😴 การพักผ่อน</h3>
        <p>การนอนหลับที่มีคุณภาพส่งผลโดยตรงต่อสุขภาพ:</p>
        <ul>
          <li>นอนให้ได้อย่างน้อย 7-8 ชั่วโมงต่อคืน</li>
          <li>ปิดหน้าจอมือถือและอุปกรณ์อิเล็กทรอนิกส์ก่อนนอน</li>
          <li>ทำกิจกรรมที่ช่วยผ่อนคลาย เช่น อ่านหนังสือหรือทำสมาธิ</li>
        </ul>

        <p className="text-muted text-center mt-4">
          🌿 **ดูแลสุขภาพวันนี้ เพื่อชีวิตที่ดีในวันข้างหน้า!**  
        </p>
      </div>
    </>
  );
};

export default Four;

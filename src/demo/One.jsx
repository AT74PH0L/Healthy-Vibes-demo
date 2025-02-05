import Navbar from "../components/Navbar";

const One = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        {/* ร้านอาหารที่ 1 */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img 
              src="https://images.unsplash.com/photo-1556745750-68295fefafc5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="ร้านอาหารเพื่อสุขภาพ 1" 
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h1 className="text-success fw-bold">ร้านอาหารเพื่อสุขภาพ</h1>
            <p className="text-muted">
              ร้านอาหารของเราคัดสรรวัตถุดิบคุณภาพสูง ปลอดสารพิษ และดีต่อสุขภาพ  
              เพื่อให้ลูกค้าสามารถเพลิดเพลินกับอาหารอร่อย พร้อมประโยชน์ครบถ้วน 🍃
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">🥗 เมนูอาหารออร์แกนิก</li>
              <li className="list-group-item">🌿 วัตถุดิบสดใหม่จากฟาร์ม</li>
              <li className="list-group-item">🚫 ไม่มีสารกันบูด & ไขมันทรานส์</li>
            </ul>
            <button className="btn btn-success mt-3">สำรองที่นั่ง</button>
          </div>
        </div>

        {/* ร้านอาหารที่ 2 */}
        <div className="row align-items-center flex-row-reverse">
          <div className="col-md-6">
            <img 
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="ร้านอาหารเพื่อสุขภาพ 2" 
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h1 className="text-primary fw-bold">สุขภาพดี เริ่มต้นที่นี่!</h1>
            <p className="text-muted">
              เรานำเสนอเมนูสุขภาพที่คัดสรรวัตถุดิบจากธรรมชาติ  
              และปรุงโดยเชฟที่เชี่ยวชาญด้านอาหารเพื่อสุขภาพ 🌱
            </p>
            <ul className="list-unstyled">
              <li>✅ อาหารปราศจากสารกันเสีย</li>
              <li>✅ วัตถุดิบออร์แกนิก 100%</li>
              <li>✅ เหมาะสำหรับสายรักสุขภาพ</li>
            </ul>
            <button className="btn btn-primary mt-3">สำรองที่นั่ง</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default One;

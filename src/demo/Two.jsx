import Navbar from "../components/Navbar";

const Two = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-primary fw-bold">
          🏋️‍♂️ วิธีการออกกำลังกายที่ถูกต้อง
        </h1>
        <p className="text-muted">
          การออกกำลังกายอย่างถูกต้องช่วยให้ร่างกายแข็งแรง
          ลดความเสี่ยงของอาการบาดเจ็บ และเพิ่มประสิทธิภาพของร่างกาย 💪
        </p>

        {/* หมวดหมู่การออกกำลังกาย */}
        <div className="row">
          {/* คาร์ดิโอ */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="https://images.pexels.com/photos/3771815/pexels-photo-3771815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="คาร์ดิโอ"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">🏃 คาร์ดิโอ</h5>
                <p className="card-text">
                  การออกกำลังกายแบบคาร์ดิโอช่วยเสริมสร้างระบบหัวใจและหลอดเลือด
                  เช่น วิ่ง ว่ายน้ำ ปั่นจักรยาน
                </p>
              </div>
            </div>
          </div>

          {/* เวทเทรนนิ่ง */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="เวทเทรนนิ่ง"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">💪 เวทเทรนนิ่ง</h5>
                <p className="card-text">
                  เสริมสร้างกล้ามเนื้อและความแข็งแรงของร่างกาย เช่น ยกน้ำหนัก
                  ดึงข้อ สควอท
                </p>
              </div>
            </div>
          </div>

          {/* โยคะ */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="โยคะ"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">🧘 โยคะ</h5>
                <p className="card-text">
                  ช่วยพัฒนาความยืดหยุ่น สมาธิ และลดความเครียด เช่น โยคะ พิลาทิส
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Two;

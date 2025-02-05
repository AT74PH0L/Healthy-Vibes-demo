import Navbar from "../components/Navbar";

const Tree = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-danger fw-bold text-center">🦠 COVID-19: ความรู้เกี่ยวกับไวรัสโคโรนา</h1>
        
        <img 
  src="https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  alt="COVID-19" 
  className="rounded mb-4" 
  style={{ width: "100%", height: "250px", objectFit: "cover" }} 
/>



        <p>
          ไวรัสโคโรนา (SARS-CoV-2) เป็นสาเหตุของโรค COVID-19 ซึ่งเริ่มแพร่ระบาดตั้งแต่ปลายปี 2019  
          และส่งผลกระทบต่อสุขภาพและเศรษฐกิจทั่วโลก  
          อาการของผู้ติดเชื้อมีตั้งแต่ไข้ ไอแห้ง หายใจลำบาก ไปจนถึงปอดอักเสบรุนแรง  
        </p>

        <h3 className="text-primary mt-4">📌 การป้องกัน</h3>
        <ul>
          <li>สวมหน้ากากอนามัยทุกครั้งเมื่อออกจากบ้าน</li>
          <li>ล้างมือด้วยสบู่หรือแอลกอฮอล์เจลบ่อยๆ</li>
          <li>เว้นระยะห่างทางสังคมอย่างน้อย 1-2 เมตร</li>
          <li>หลีกเลี่ยงสถานที่แออัดและระบบระบายอากาศไม่ดี</li>
        </ul>

        <h3 className="text-success mt-4">💉 การฉีดวัคซีน</h3>
        <p>
          วัคซีน COVID-19 เป็นเครื่องมือสำคัญในการควบคุมการระบาด  
          ลดความรุนแรงของอาการ และลดอัตราการเสียชีวิต  
          ปัจจุบันมีวัคซีนหลากหลายชนิด เช่น mRNA, Viral Vector และ Protein Subunit  
        </p>

        <h3 className="text-warning mt-4">⚠️ อาการของ COVID-19</h3>
        <p>ผู้ติดเชื้ออาจมีอาการดังต่อไปนี้:</p>
        <ul>
          <li>มีไข้ ไอ เจ็บคอ</li>
          <li>หายใจลำบาก เหนื่อยง่าย</li>
          <li>สูญเสียการรับรสหรือกลิ่น</li>
          <li>อาการรุนแรงอาจนำไปสู่ปอดอักเสบ</li>
        </ul>

        <p className="text-muted text-center mt-4">📢 หากมีอาการรุนแรง ควรรีบพบแพทย์ทันที</p>
      </div>
    </>
  );
};

export default Tree;

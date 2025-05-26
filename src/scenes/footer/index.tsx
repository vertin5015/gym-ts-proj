import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            生命在于运动，锻炼让你更强壮。全面锻炼身体，提升自我，塑造理想体态。
            我们为您提供专业、科学的健身服务和课程。
          </p>
          <p>© Evogym 版权所有</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">链接</h4>
          <p className="my-5">中老年人健身课程</p>
          <p className="my-5">孕期及产后运动指导</p>
          <p className="my-5">全面身体训练课程</p>
        </div>
        <div>
          <h4 className="font-bold">联系我们</h4>
          <p className="my-5">锻炼时间灵活，课程丰富多样，欢迎随时咨询。</p>
          <p className="my-5">(+86) 123 4567 8910</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

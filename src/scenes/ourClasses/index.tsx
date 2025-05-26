import { SelectedPage, type ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "力量训练课程",
    description:
      "通过系统的负重训练，提升肌肉力量与身体线条，增强体能，塑造更强健的体魄。",
    image: image1,
  },
  {
    name: "瑜伽课程",
    description:
      "结合呼吸与身体姿势，提升柔韧性、平衡感与内在平静，适合所有年龄层的放松锻炼。",
    image: image2,
  },
  {
    name: "核心训练课程",
    description:
      "专注于核心区域的训练，强化腹部力量，塑造紧实线条，提升整体身体稳定性。",
    image: image3,
  },
  {
    name: "户外冒险课程",
    description:
      "充满挑战与趣味的户外活动课程，锻炼体能、团队合作与应变能力，体验运动的无限可能。",
    image: image4,
  },
  {
    name: "力量训练课程",
    description:
      "多样化的有氧与力量训练组合，全面提升心肺功能、身体素质与健康水平，适合所有健身爱好者。",
    image: image5,
  },
  {
    name: "专业训练课程",
    description:
      "专业系统的训练课程，依据不同目标进行定制化锻炼，助你高效达成健身目标。",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>我们的课程</HText>
            <p className="py-5">
              想健身却不知道从哪开始？不用担心！
              从燃脂塑形的核心训练到舒缓放松的瑜伽课程，这里应有尽有，帮你一步步建立自信，遇见更好的自己！
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;

import HText from "@/shared/HText";
import { SelectedPage, type BenefitType } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "先进的设施",
    description:
      "拥有先进的健身设备和环境，让每一次锻炼都更高效、舒适。我们致力于为会员提供最优质的健身体验。",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "丰富多样的课程",
    description:
      "我们提供上百种多样化课程，满足不同年龄和健身目标的需求。无论是瑜伽、舞蹈还是力量训练，总有一款适合你。",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "专业资深教练团队",
    description:
      "我们的教练团队由经验丰富的专业人士组成，个性化指导助你高效达成健身目标，科学训练更安全。",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>并不只是一个体育馆。</HText>
          <p className="my-5 text-sm">
            我们提供世界一流的健身器材、教练和课程，
            助您轻松实现终极健身目标。我们真诚关怀每一位会员。
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHICS */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    数千个会员快乐<span className="text-primary-500">健身</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                新生儿般的身躯充满力量与韧性。身体灵活，充满潜力，能适应不断变化的环境。
                面对压力时，依然保持坚韧，展现出非凡的适应能力与意志力。
                渴望探索，不断突破自我。每一次挑战都是成长的机会，每一次尝试都积累着经验与智慧。
              </p>
              <p className="mb-5">
                面对外界压力，依旧沉着冷静，应对自如。
                坚定的步伐展现出内在的信念与力量。即使环境复杂，依然坚持本心，不动摇。
                内外兼修，是智慧与坚韧并存的体现。不断前行，不惧风雨。
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  加入我们
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;

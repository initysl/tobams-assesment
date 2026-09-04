import Hero from "@/components/sections/Hero";
import LearningManagementSystem from "@/components/sections/LearningManagementSystem";
import FeatureSplit from "@/components/sections/FeatureSplit";
import ManagementDevelopmentProgram from "@/components/sections/ManagementDevelopmentProgram";
import TransformationHub from "@/components/sections/TransformationHub";
import TrainingTheConsultant from "@/components/sections/TrainingTheConsultant";
import ConsultationCta from "@/components/sections/ConsultationCta";
import Testimonials from "@/components/sections/Testimonials";
import { FEATURE_SPLITS } from "@/lib/content";

export default function TrainingAndDevelopmentPage() {
  return (
    <main>
      <Hero />
      <LearningManagementSystem />
      {FEATURE_SPLITS.map((content) => (
        <FeatureSplit key={content.id} content={content} />
      ))}
      <ManagementDevelopmentProgram />
      <TransformationHub />
      <TrainingTheConsultant />
      <ConsultationCta />
      <Testimonials />
    </main>
  );
}

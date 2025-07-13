"use client";

import AiClasifierImageUpload from "./image-upload";
import ItemInformation from "./item-information";
import AiAnalysis from "./ai-analysis-footer";
import { AiClassifierFormDataProps } from "@/app/(business-logic)/app/ai-classifier/page";

const AiClassifierContent = ({
  classifierFormData,
  setClassifierFormData,
}: {
  classifierFormData: AiClassifierFormDataProps;
  setClassifierFormData: React.Dispatch<
    React.SetStateAction<AiClassifierFormDataProps>
  >;
}) => {
  return (
    <section>
      <form>
        {/* upload Your Image  */}
        <AiClasifierImageUpload
          classifierFormData={classifierFormData}
          setClassifierFormData={setClassifierFormData}
        />

        {/* item information  */}
        <ItemInformation
          classifierFormData={classifierFormData}
          setClassifierFormData={setClassifierFormData}
        />

        <AiAnalysis />
      </form>
    </section>
  );
};

export default AiClassifierContent;

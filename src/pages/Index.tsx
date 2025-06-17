
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import DataLoadingIntro from '@/components/DataLoadingIntro';
import ExtractStage from '@/components/pipeline-stages/ExtractStage';
import TransformStage from '@/components/pipeline-stages/TransformStage';
import ModelStage from '@/components/pipeline-stages/ModelStage';
import QualityStage from '@/components/pipeline-stages/QualityStage';
import DataLake from '@/components/DataLake';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {showIntro && (
          <DataLoadingIntro onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <div className="min-h-screen">
          {/* Extract Stage - Profile Data */}
          <ExtractStage />
          
          {/* Transform Stage - Skills */}
          <TransformStage />
          
          {/* Model Stage - Projects */}
          <ModelStage />
          
          {/* Quality Stage - Certifications */}
          <QualityStage />
          
          {/* Final Data Lake */}
          <DataLake />
        </div>
      )}
    </div>
  );
};

export default Index;

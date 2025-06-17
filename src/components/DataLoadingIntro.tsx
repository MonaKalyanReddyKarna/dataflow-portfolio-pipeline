
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DataLoadingIntroProps {
  onComplete: () => void;
}

const DataLoadingIntro: React.FC<DataLoadingIntroProps> = ({ onComplete }) => {
  const [loadingText, setLoadingText] = useState('');
  const [showFiles, setShowFiles] = useState(false);
  const [filesDropped, setFilesDropped] = useState(false);

  const fullText = 'INITIALIZING DATA PIPELINE...';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setLoadingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowFiles(true), 500);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (showFiles) {
      setTimeout(() => {
        setFilesDropped(true);
        setTimeout(() => onComplete(), 2000);
      }, 1500);
    }
  }, [showFiles, onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 z-50 flex items-center justify-center"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 1 }}
    >
      {/* Terminal Window */}
      <div className="bg-slate-800 rounded-lg border border-slate-600 p-6 max-w-lg w-full mx-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-slate-400 text-sm ml-2">terminal</span>
        </div>
        
        <div className="font-mono text-green-400">
          <div className="mb-2">$ python initialize_portfolio.py</div>
          <div className="text-cyan-400">{loadingText}<span className="animate-pulse">|</span></div>
          
          {showFiles && (
            <motion.div 
              className="mt-4 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-yellow-400">Loading data files...</div>
              <div className="text-slate-300">✓ Name.pdf</div>
              <div className="text-slate-300">✓ Data_Engineer.json</div>
              <div className="text-slate-300">✓ Skills.parquet</div>
              <div className="text-green-400 mt-2">Ready to process data stream.</div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Floating Files Animation */}
      <AnimatePresence>
        {showFiles && (
          <>
            <motion.div
              className="absolute top-20 left-1/4 bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-lg shadow-2xl"
              initial={{ y: -100, opacity: 0, rotate: -10 }}
              animate={{ 
                y: filesDropped ? 200 : 0, 
                opacity: filesDropped ? 0 : 1,
                rotate: filesDropped ? 360 : -10,
                scale: filesDropped ? 0.3 : 1
              }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <div className="text-white font-mono text-sm">📄 Name.pdf</div>
            </motion.div>

            <motion.div
              className="absolute top-20 right-1/4 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg shadow-2xl"
              initial={{ y: -100, opacity: 0, rotate: 10 }}
              animate={{ 
                y: filesDropped ? 200 : 0, 
                opacity: filesDropped ? 0 : 1,
                rotate: filesDropped ? -360 : 10,
                scale: filesDropped ? 0.3 : 1
              }}
              transition={{ duration: 1.5, delay: 0.8 }}
            >
              <div className="text-white font-mono text-sm">🗂️ Data_Engineer.json</div>
            </motion.div>

            {/* Glass Pipeline */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-96 bg-gradient-to-t from-cyan-500/30 to-transparent border-2 border-cyan-400/50 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {/* Flowing water animation */}
              <motion.div
                className="absolute inset-2 bg-gradient-to-t from-cyan-400/60 to-transparent rounded-full"
                animate={{
                  background: [
                    'linear-gradient(to top, rgba(34, 211, 238, 0.6), transparent)',
                    'linear-gradient(to top, rgba(59, 130, 246, 0.6), transparent)',
                    'linear-gradient(to top, rgba(34, 211, 238, 0.6), transparent)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Scroll prompt */}
      {filesDropped && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="text-cyan-400 font-mono mb-2">Scroll to follow the data</div>
          <motion.div
            className="text-2xl text-cyan-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default DataLoadingIntro;

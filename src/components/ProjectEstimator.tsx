import { useState, useEffect } from 'react';
import { Sparkles, Calculator, Check, ArrowRight, RefreshCw, Layers, Calendar, CheckSquare, Square } from 'lucide-react';
import { Language } from '../types';
import {
  estimateProjectTypes,
  estimateScopes,
  estimateFeatures,
  dictionary,
} from '../data';

interface ProjectEstimatorProps {
  language: Language;
  onEstimatorSubmit: (estimatedDetails: string) => void;
}

export default function ProjectEstimator({ language, onEstimatorSubmit }: ProjectEstimatorProps) {
  const [selectedType, setSelectedType] = useState<string>('web');
  const [selectedScope, setSelectedScope] = useState<string>('small');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isLocked, setIsLocked] = useState<boolean>(false);

  // States to keep calculated outcomes
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 0 });
  const [weeksRequired, setWeeksRequired] = useState<{ min: number; max: number }>({ min: 0, max: 0 });

  // Recalculating formula on criteria change
  useEffect(() => {
    const pType = estimateProjectTypes.find(t => t.id === selectedType) || estimateProjectTypes[0];
    const pScope = estimateScopes.find(s => s.id === selectedScope) || estimateScopes[0];

    // Costs
    const baseTypeCost = pType.baseCost;
    const scopePartCost = pScope.baseCost;
    const multiplier = pType.multiplier * pScope.multiplier;

    let featureTotalCost = 0;
    selectedFeatures.forEach(fid => {
      const f = estimateFeatures.find(item => item.id === fid);
      if (f) featureTotalCost += f.cost;
    });

    const computedBaseMin = Math.round((baseTypeCost + scopePartCost) * multiplier + featureTotalCost);
    // Let's create a healthy professional spread of price range (e.g., -5% and +15%)
    const finalMin = Math.round(computedBaseMin * 0.95);
    const finalMax = Math.round(computedBaseMin * 1.15);

    // Timelines
    let baseWeeks = 3; // minimal development chunk
    if (selectedType === 'mobile') baseWeeks = 4;
    if (selectedType === 'enterprise') baseWeeks = 6;
    if (selectedType === 'design') baseWeeks = 2;

    let scopeMultiplierWeeks = 1.0;
    if (selectedScope === 'medium') scopeMultiplierWeeks = 1.35;
    if (selectedScope === 'large') scopeMultiplierWeeks = 1.8;

    let extraWeeks = 0;
    selectedFeatures.forEach(fid => {
      const f = estimateFeatures.find(item => item.id === fid);
      if (f) extraWeeks += f.addedWeeks;
    });

    const computedWeeksMin = Math.round(baseWeeks * scopeMultiplierWeeks + extraWeeks);
    const computedWeeksMax = Math.round(computedWeeksMin + 2);

    setPriceRange({ min: finalMin, max: finalMax });
    setWeeksRequired({ min: computedWeeksMin, max: computedWeeksMax });
    setIsLocked(false);
  }, [selectedType, selectedScope, selectedFeatures]);

  const handleToggleFeature = (id: string) => {
    setSelectedFeatures(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const resetEstimator = () => {
    setSelectedType('web');
    setSelectedScope('small');
    setSelectedFeatures([]);
    setIsLocked(false);
  };

  const handleLockAndProgress = () => {
    const pTypeObj = estimateProjectTypes.find(t => t.id === selectedType);
    const pScopeObj = estimateScopes.find(s => s.id === selectedScope);
    const featureLabels = selectedFeatures.map(fid => {
      const f = estimateFeatures.find(item => item.id === fid);
      return f ? f.name[language] : '';
    }).filter(Boolean);

    const textDraft = language === 'en'
      ? `Estimated Project Spec:\n- Class: ${pTypeObj?.name.en}\n- Scope Scale: ${pScopeObj?.name.en}\n- Extras: ${featureLabels.join(', ') || 'None'}\n- Projected Time: ${weeksRequired.min}-${weeksRequired.max} Weeks\n- Target Budget Range: $${priceRange.min} - $${priceRange.max}\n\n[Please customize your custom parameters here]`
      : `საორიენტაციო პროექტის სპეციფიკაცია:\n- კლასი: ${pTypeObj?.name.ge}\n- მასშტაბი: ${pScopeObj?.name.ge}\n- დამატებები: ${featureLabels.join(', ') || 'არცერთი'}\n- სავარაუდო ხანგრძლივობა: ${weeksRequired.min}-${weeksRequired.max} კვირა\n- სამიზნე ბიუჯეტი: $${priceRange.min} - $${priceRange.max}\n\n[აქ შეგიძლიათ ჩაწეროთ დამატებითი დეტალები]`;

    onEstimatorSubmit(textDraft);
    setIsLocked(true);
  };

  return (
    <section id="estimator" className="relative py-28 bg-[#0A0A0A] border-y border-artistic-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="estimator-header-block">
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-artistic-primary font-black block mb-4">
            {dictionary.navEstimator[language]}
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#F5F5F4] uppercase tracking-wider mb-4">
            {dictionary.estimatorHeader[language]}
          </h2>
          <div className="h-[2px] w-16 bg-artistic-primary mx-auto mb-6"></div>
          <p className="text-[#F5F5F4]/60 text-sm sm:text-base leading-relaxed">
            {dictionary.estimatorSubheader[language]}
          </p>
        </div>

        {/* Estimator Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start" id="estimator-body-grid">
          
          {/* Controls Side */}
          <div className="lg:col-span-7 space-y-8 bg-[#121212] border border-artistic-border p-6 sm:p-8 rounded-none">
            
            {/* Step 1: Project Class */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-5 rounded-none bg-black flex items-center justify-center font-mono text-[10px] text-[#F5F5F4] font-black border border-artistic-border">1</div>
                <h3 className="text-xs font-black text-[#F5F5F4] uppercase tracking-wider">{dictionary.estProjectType[language]}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {estimateProjectTypes.map(type => {
                  const isChecked = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`p-4 rounded-none text-left border cursor-pointer transition-all duration-300 focus:outline-none flex flex-col justify-between h-24 ${
                        isChecked
                          ? 'border-artistic-primary bg-black/60 shadow-xl'
                          : 'border-artistic-border bg-black/20 hover:border-[#F5F5F4]/30 hover:bg-black/40'
                      }`}
                      id={`type-option-${type.id}`}
                    >
                      <span className={`text-[11px] font-mono uppercase tracking-wider font-extrabold ${isChecked ? 'text-artistic-primary' : 'text-[#F5F5F4]/60'}`}>
                        {type.name[language]}
                      </span>
                      <span className="text-[9px] font-mono text-artistic-muted uppercase">
                        {language === 'en' ? 'COMPLEXITY FACTOR' : 'სირთულის საბაზისო ფაქტორი'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scope Scale */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-5 rounded-none bg-black flex items-center justify-center font-mono text-[10px] text-[#F5F5F4] font-black border border-artistic-border">2</div>
                <h3 className="text-xs font-black text-[#F5F5F4] uppercase tracking-wider">{dictionary.estScope[language]}</h3>
              </div>
              <div className="space-y-2.5">
                {estimateScopes.map(scope => {
                  const isChecked = selectedScope === scope.id;
                  return (
                    <button
                      key={scope.id}
                      onClick={() => setSelectedScope(scope.id)}
                      className={`w-full p-4 rounded-none text-left border cursor-pointer transition-all duration-300 focus:outline-none flex items-center justify-between ${
                        isChecked
                          ? 'border-artistic-primary bg-black/60'
                          : 'border-artistic-border bg-black/20 hover:border-[#F5F5F4]/30 hover:bg-black/40'
                      }`}
                      id={`scope-option-${scope.id}`}
                    >
                      <span className={`text-[11px] font-mono uppercase tracking-wider font-extrabold ${isChecked ? 'text-artistic-primary font-black' : 'text-[#F5F5F4]/60'}`}>
                        {scope.name[language]}
                      </span>
                      <div className={`w-3.5 h-3.5 rounded-none border flex items-center justify-center shrink-0 ${isChecked ? 'border-artistic-primary bg-artistic-primary/20' : 'border-artistic-border'}`}>
                        {isChecked && <div className="w-1.5 h-1.5 bg-artistic-primary" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Optional Integrations */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-5 rounded-none bg-black flex items-center justify-center font-mono text-[10px] text-[#F5F5F4] font-black border border-artistic-border">3</div>
                <h3 className="text-xs font-black text-[#F5F5F4] uppercase tracking-wider">{dictionary.estFeatures[language]}</h3>
              </div>
              <div className="space-y-2">
                {estimateFeatures.map(feat => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => handleToggleFeature(feat.id)}
                      className={`w-full p-3.5 rounded-none text-left border cursor-pointer transition-all duration-300 focus:outline-none flex items-center justify-between ${
                        isChecked
                          ? 'border-artistic-primary bg-black/60'
                          : 'border-artistic-border bg-black/20 hover:border-[#F5F5F4]/30'
                      }`}
                      id={`feat-option-${feat.id}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3.5 h-3.5 rounded-none flex items-center justify-center border transition-all ${
                          isChecked ? 'bg-artistic-primary text-white border-artistic-primary' : 'border-artistic-border bg-black'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className={`text-[11px] font-mono uppercase tracking-wider font-extrabold ${isChecked ? 'text-artistic-primary' : 'text-[#F5F5F4]/60'}`}>
                          {feat.name[language]}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-artistic-muted font-bold">
                        +{feat.addedWeeks}W
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Real-time Calculation Panel with high architectural contrast */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 bg-[#121212] border border-artistic-border p-6 sm:p-8 rounded-none shadow-2xl">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-artistic-border" id="calc-panel-header">
              <div className="flex items-center gap-2.5">
                <Calculator className="w-4.5 h-4.5 text-artistic-primary" />
                <h3 className="text-xs font-black text-white uppercase tracking-widest">{language === 'en' ? 'Live Computations' : 'მყისიერი კალკულაცია'}</h3>
              </div>
              <button
                onClick={resetEstimator}
                className="p-1.5 rounded-none bg-black border border-artistic-border text-slate-400 hover:text-white hover:border-[#F5F5F4]/40 transition cursor-pointer focus:outline-none"
                id="reset-estimator-btn"
                title="Reset calculator"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Price Output */}
            <div className="mb-6 bg-black border border-artistic-border p-5 rounded-none" id="pricing-result-wrap">
              <span className="text-[9px] font-mono font-black tracking-widest text-artistic-muted uppercase block mb-1.5">
                {dictionary.estResultCost[language]}
              </span>
              <div className="flex items-baseline gap-1" id="pricing-result-num">
                <span className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight">
                  ${priceRange.min}
                </span>
                <span className="text-artistic-primary font-bold px-1">—</span>
                <span className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight">
                  ${priceRange.max}
                </span>
                <span className="text-[10px] text-[#F5F5F4]/60 font-black ml-1.5 font-mono uppercase">USD</span>
              </div>
            </div>

            {/* Time Output */}
            <div className="mb-8 bg-black border border-artistic-border p-5 rounded-none" id="timeline-result-wrap">
              <span className="text-[9px] font-mono font-black tracking-widest text-artistic-muted uppercase block mb-2">
                {dictionary.estResultTime[language]}
              </span>
              <div className="flex items-center gap-2.5" id="timeline-result-num">
                <Calendar className="w-4 h-4 text-artistic-primary shrink-0" />
                <span className="text-lg sm:text-xl font-sans font-black text-[#F5F5F4] tracking-wider uppercase">
                  {weeksRequired.min} – {weeksRequired.max} {language === 'en' ? 'Weeks' : 'კვირა'}
                </span>
              </div>
            </div>

            {/* Disclaimer text */}
            <p className="text-[10px] text-artistic-muted uppercase tracking-wider font-mono font-semibold leading-relaxed mb-6">
              {dictionary.estDisclaimer[language]}
            </p>

            {/* submission lock trigger */}
            <button
              onClick={handleLockAndProgress}
              disabled={isLocked}
              className={`w-full py-4 rounded-none text-[11px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none cursor-pointer ${
                isLocked
                  ? 'bg-black border border-emerald-500/30 text-emerald-300'
                  : 'bg-artistic-primary text-white hover:bg-[#2040A0] shadow-xl hover:scale-[1.01]'
              }`}
              id="lock-estimator-cta"
            >
              {isLocked ? (
                <>
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  {language === 'en' ? 'SYNCHRONIZED WITH FORM' : 'საკონტაქტო ფორმა მზადაა'}
                </>
              ) : (
                <>
                  <span>{dictionary.estCTA[language]}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {isLocked && (
              <div className="mt-4 p-3 bg-black border border-emerald-500/20 text-[10px] font-mono uppercase tracking-wider text-emerald-300/90 leading-relaxed animate-in fade-in duration-300">
                {dictionary.estSuccess[language]}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

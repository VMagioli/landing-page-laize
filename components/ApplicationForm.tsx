
import React, { useState } from 'react';
import Button from './Button';

interface ApplicationFormProps {
    onClose: () => void;
}

type SubmissionStatus = 'idle' | 'submitting' | 'approved' | 'disqualified';

const ApplicationForm: React.FC<ApplicationFormProps> = ({ onClose }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        nome: '',
        whatsapp: '',
        instagram: '',
        profissional_tecnico: '',
        experiencia_ativa: '',
        gravar_videos: '',
        capacidade_investimento: '',
        falta_direcao: '',
    });

    const [status, setStatus] = useState<SubmissionStatus>('idle');
    const [disqualificationMessage, setDisqualificationMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRadioChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const postToSheetDB = async (leadStatus: 'Aprovado' | 'Desqualificado') => {
        const payload = {
            data: new Date().toLocaleString('pt-BR'),
            ...formData,
            status_lead: leadStatus,
        };

        try {
            await fetch('https://sheetdb.io/api/v1/shfvoyc81ea20', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: [payload] }),
            });
        } catch (error) {
            console.error('Erro ao enviar dados para SheetDB:', error);
        }
    };

    const nextStep = async () => {
        // Step 0 check (Contact Info)
        if (currentStep === 0) {
            if (!formData.nome || !formData.whatsapp || !formData.instagram) {
                alert('Por favor, preencha todos os dados de contato.');
                return;
            }
            setCurrentStep(1);
            return;
        }

        // Qualification Logic per Step
        if (currentStep === 1 && formData.profissional_tecnico === 'Não') {
            handleDisqualification(`${formData.nome} não é o seu momento. O Projeto Reputação Digital foi desenvolvido para profissionais técnicos que desejam estruturar sua presença digital com estratégia e posicionamento. Se você já atua no mercado digital, este projeto pode não ser o mais adequado para o seu momento.`);
            return;
        }

        if (currentStep === 2 && formData.experiencia_ativa === 'Não') {
            handleDisqualification(`${formData.nome} não é o seu momento. O projeto é voltado para profissionais que já possuem atuação prática e desejam ajustar posicionamento e reputação. Quando você estiver em fase de consolidação, pode fazer sentido aplicar.`);
            return;
        }

        if (currentStep === 3 && formData.gravar_videos === 'Não') {
            handleDisqualification(`${formData.nome} não é o seu momento. O método exige exposição estratégica por meio de vídeos. Se você não está disposta(o) a executar, o projeto não trará resultado.`);
            return;
        }

        if (currentStep === 4 && formData.capacidade_investimento === 'Não') {
            handleDisqualification(`${formData.nome} não é o seu momento. O Projeto exige que você tenha a capacidade de investimento de R$2.997 e você demonstrou que não tem. Quando estiver disponível de fazer este investimento, será um prazer te receber.`);
            return;
        }

        // Final Step
        if (currentStep === 5) {
            if (!formData.falta_direcao) {
                alert('Por favor, selecione uma opção.');
                return;
            }
            setStatus('submitting');
            await postToSheetDB('Aprovado');
            setStatus('approved');
            return;
        }

        // Move Forward if not disqualified
        setCurrentStep((prev) => prev + 1);
    };

    const handleDisqualification = async (message: string) => {
        setStatus('submitting');
        setDisqualificationMessage(message);
        await postToSheetDB('Desqualificado');
        setStatus('disqualified');
    };

    if (status === 'approved') {
        return (
            <div className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center p-4 overflow-y-auto">
                <div className="max-w-2xl w-full bg-black border border-beige/10 p-8 md:p-12 rounded-2xl shadow-2xl text-center">
                    <div className="w-20 h-20 bg-[#EC4899]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-[#EC4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Parabéns!</h2>
                    <p className="text-beige/90 text-lg mb-10 leading-relaxed font-light">
                        Seu perfil está alinhado ao Projeto Reputação Digital. Escolha a sua forma de pagamento preferida abaixo:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <a
                            href="#" // URL de pagamento Pix
                            className="bg-[#EC4899] text-white font-black text-sm py-5 px-6 rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transform hover:scale-105 transition-all duration-300 uppercase tracking-widest text-center flex items-center justify-center animate-pulse"
                        >
                            Pagar com Pix
                        </a>
                        <a
                            href="#" // URL de pagamento Cartão
                            className="bg-white text-black font-black text-sm py-5 px-6 rounded-xl hover:bg-beige/10 transform hover:scale-105 transition-all duration-300 uppercase tracking-widest text-center flex items-center justify-center"
                        >
                            Pagar com Cartão
                        </a>
                    </div>
                    <p className="mt-8 text-beige/40 text-sm">Após a conclusão, entraremos em contato para agendar sua reunião.</p>
                </div>
            </div>
        );
    }

    if (status === 'disqualified') {
        return (
            <div className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center p-4">
                <div className="max-w-2xl w-full bg-black border border-beige/10 p-8 md:p-12 rounded-2xl shadow-2xl text-center">
                    <div className="w-16 h-16 bg-beige/5 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-beige/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <p className="text-beige/90 text-lg mb-10 leading-relaxed">
                        {disqualificationMessage}
                    </p>
                    <button
                        onClick={onClose}
                        className="text-beige/50 hover:text-white underline font-medium transition-colors"
                    >
                        Voltar para a página inicial
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto">
            <div className="min-h-screen flex items-center justify-center p-4 py-12">
                <div className="max-w-2xl w-full bg-black border border-beige/10 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-beige/40 hover:text-white transition-colors z-10"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Progress Bar */}
                    <div className="absolute top-0 left-0 h-1 bg-white/5 w-full">
                        <div
                            className="h-full bg-[#EC4899] transition-all duration-500 ease-out"
                            style={{ width: `${(currentStep / 5) * 100}%` }}
                        />
                    </div>

                    <div className="relative mt-4">
                        {/* Step 0: Dados de Contato */}
                        {currentStep === 0 && (
                            <div className="animate-in fade-in slide-in-from-right duration-500">
                                <h2 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">Comece sua Aplicação</h2>
                                <p className="text-beige/50 mb-8">Primeiro, preencha seus dados de contato:</p>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest ml-1">Nome Completo</label>
                                        <input
                                            required
                                            type="text"
                                            name="nome"
                                            value={formData.nome}
                                            onChange={handleChange}
                                            placeholder="Ex: Maria Silva"
                                            className="w-full bg-[#0a0a0a] border border-beige/10 text-white p-4 rounded-xl focus:border-[#EC4899] focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest ml-1">WhatsApp</label>
                                        <input
                                            required
                                            type="tel"
                                            name="whatsapp"
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            placeholder="(00) 00000-0000"
                                            className="w-full bg-[#0a0a0a] border border-gray-800 text-white p-4 rounded-xl focus:border-[#EC4899] focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest ml-1">@Instagram</label>
                                        <input
                                            required
                                            type="text"
                                            name="instagram"
                                            value={formData.instagram}
                                            onChange={handleChange}
                                            placeholder="@seuusuario"
                                            className="w-full bg-[#0a0a0a] border border-beige/10 text-white p-4 rounded-xl focus:border-[#EC4899] focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Questions 1-5 */}
                        {currentStep === 1 && (
                            <QuestionStep
                                label="Você atua como profissional técnico em uma área especializada (saúde, direito, arquitetura, odontologia, psicologia, nutrição ou serviços similares)?"
                                name="profissional_tecnico"
                                options={[
                                    { label: "Sim, sou profissional técnico e atendo clientes/pacientes.", value: "Sim" },
                                    { label: "Não, atuso no mercado digital (marketing, mentoria, social media, lançamentos etc.)", value: "Não" }
                                ]}
                                currentValue={formData.profissional_tecnico}
                                onChange={handleRadioChange}
                            />
                        )}

                        {currentStep === 2 && (
                            <QuestionStep
                                label="Você já possui clientes ativos ou experiência prática na sua área?"
                                name="experiencia_ativa"
                                options={[
                                    { label: "Sim, já atuo profissionalmente.", value: "Sim" },
                                    { label: "Estou começando agora.", value: "Não" }
                                ]}
                                currentValue={formData.experiencia_ativa}
                                onChange={handleRadioChange}
                            />
                        )}

                        {currentStep === 3 && (
                            <QuestionStep
                                label="Você está disposta(o) a gravar vídeos e sustentar frequência de conteúdo conforme a estratégia definida?"
                                name="gravar_videos"
                                options={[
                                    { label: "Sim.", value: "Sim" },
                                    { label: "Não.", value: "Não" }
                                ]}
                                currentValue={formData.gravar_videos}
                                onChange={handleRadioChange}
                            />
                        )}

                        {currentStep === 4 && (
                            <QuestionStep
                                label="O Projeto tem o investimento de R$2.997. Você tem essa capacidade de investimento no momento?"
                                name="capacidade_investimento"
                                options={[
                                    { label: "Sim, consigo investir.", value: "Sim" },
                                    { label: "Não, não é o meu momento.", value: "Não" }
                                ]}
                                currentValue={formData.capacidade_investimento}
                                onChange={handleRadioChange}
                            />
                        )}

                        {currentStep === 5 && (
                            <QuestionStep
                                label="Você já tentou estar no digital, mas sente que falta direção clara de posicionamento?"
                                name="falta_direcao"
                                options={[
                                    { label: "Sim", value: "Sim" },
                                    { label: "Não", value: "Não" }
                                ]}
                                currentValue={formData.falta_direcao}
                                onChange={handleRadioChange}
                            />
                        )}

                        <div className="mt-12 flex justify-between items-center">
                            {currentStep > 0 && (
                                <button
                                    onClick={() => setCurrentStep((prev) => prev - 1)}
                                    className="text-beige/50 hover:text-white transition-colors"
                                >
                                    ← Voltar
                                </button>
                            )}
                            <div className="ml-auto flex items-center gap-4">
                                <span className="text-white/20 text-xs font-bold">{currentStep + 1} de 6</span>
                                <Button
                                    className="py-4 px-10 text-sm tracking-widest shadow-none"
                                    onClick={nextStep}
                                >
                                    {status === 'submitting' ? 'Processando...' : (currentStep === 5 ? 'Finalizar' : 'Próximo →')}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface QuestionStepProps {
    label: string;
    name: string;
    options: { label: string; value: string }[];
    currentValue: string;
    onChange: (name: string, value: string) => void;
}

const QuestionStep: React.FC<QuestionStepProps> = ({ label, name, options, currentValue, onChange }) => {
    return (
        <div className="animate-in fade-in slide-in-from-right duration-500">
            <h3 className="text-xl md:text-2xl font-medium text-white mb-8 leading-relaxed">
                {label}
            </h3>
            <div className="grid gap-3">
                {options.map((opt) => (
                    <label
                        key={opt.value}
                        className={`
              flex items-center p-5 rounded-2xl border cursor-pointer transition-all duration-300
              ${currentValue === opt.value
                                ? 'bg-[#EC4899]/5 border-[#EC4899] text-white shadow-[0_0_20px_rgba(236,72,153,0.05)]'
                                : 'bg-[#0a0a0a] border-white/5 text-beige/50 hover:border-white/10'
                            }
            `}
                    >
                        <input
                            type="radio"
                            name={name}
                            value={opt.value}
                            checked={currentValue === opt.value}
                            onChange={() => onChange(name, opt.value)}
                            className="sr-only"
                        />
                        <div className={`
              w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center transition-all
              ${currentValue === opt.value ? 'border-[#EC4899]' : 'border-white/10'}
            `}>
                            {currentValue === opt.value && <div className="w-2.5 h-2.5 rounded-full bg-[#EC4899]" />}
                        </div>
                        <span className="text-sm md:text-base font-medium">{opt.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default ApplicationForm;

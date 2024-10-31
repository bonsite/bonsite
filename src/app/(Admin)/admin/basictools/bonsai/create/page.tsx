import React from 'react';

interface Bonsai {
  sol: number;
  sol_desc: string;
  agua: number;
  agua_desc: string;
  tamanho: number;
  tamanho_desc: string;
  poda: number;
  
  poda_desc: string;
  solo: number;
  solo_desc: string;
  delicadeza: number;
  delicadeza_desc: string;
}

interface Props {
  bonsai: Bonsai;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const SliderField: React.FC<{ label: string; name: string; value: string; handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void }> = ({ label, name, value, handleChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type="range"
      name={name}
      value={value}
      onChange={handleChange}
      min="1"
      max="10"
      className="mt-1 block w-full"
    />
  </div>
);

const TextAreaField: React.FC<{ label: string; name: string; value: string; handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void }> = ({ label, name, value, handleChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={handleChange}
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500 sm:text-sm"
    />
  </div>
);

const BonsaiForm: React.FC<Props> = ({ bonsai, handleChange }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <SliderField label="Sol (1-10)" name="sol" value={bonsai.sol.toString()} handleChange={handleChange} />
    <TextAreaField label="Descrição do Sol" name="sol_desc" value={bonsai.sol_desc} handleChange={handleChange} />
    <SliderField label="Água (1-10)" name="agua" value={bonsai.agua.toString()} handleChange={handleChange} />
    <TextAreaField label="Descrição da Água" name="agua_desc" value={bonsai.agua_desc} handleChange={handleChange} />
    <SliderField label="Tamanho (1-10)" name="tamanho" value={bonsai.tamanho.toString()} handleChange={handleChange} />
    <TextAreaField label="Descrição do Tamanho" name="tamanho_desc" value={bonsai.tamanho_desc} handleChange={handleChange} />
    <SliderField label="Poda (1-10)" name="poda" value={bonsai.poda.toString()} handleChange={handleChange} />
    <TextAreaField label="Descrição da Poda" name="poda_desc" value={bonsai.poda_desc} handleChange={handleChange} />
    <SliderField label="Solo (1-10)" name="solo" value={bonsai.solo.toString()} handleChange={handleChange} />
    <TextAreaField label="Descrição do Solo" name="solo_desc" value={bonsai.solo_desc} handleChange={handleChange} />
    <SliderField label="Delicadeza (1-10)" name="delicadeza" value={bonsai.delicadeza.toString()} handleChange={handleChange} />
    <TextAreaField label="Descrição da Delicadeza" name="delicadeza_desc" value={bonsai.delicadeza_desc} handleChange={handleChange} />
  </div>
);

export default BonsaiForm;
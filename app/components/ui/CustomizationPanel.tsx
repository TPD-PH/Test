import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogDescription, DialogButton } from './Dialog';
import { classNames } from '~/utils/classNames';
import { themeStore } from '~/lib/stores/theme';

interface CustomizationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomizationPanel: React.FC<CustomizationPanelProps> = ({ isOpen, onClose }) => {
  const [selectedTheme, setSelectedTheme] = useState<string>(themeStore.get());

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
    themeStore.set(theme);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Personaliza la interfaz</DialogTitle>
      <DialogDescription>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Selecciona un tema</h2>
          <div className="flex gap-2">
            <button
              className={classNames(
                'p-2 rounded border',
                selectedTheme === 'light' ? 'border-blue-500' : 'border-gray-300'
              )}
              onClick={() => handleThemeChange('light')}
            >
              Claro
            </button>
            <button
              className={classNames(
                'p-2 rounded border',
                selectedTheme === 'dark' ? 'border-blue-500' : 'border-gray-300'
              )}
              onClick={() => handleThemeChange('dark')}
            >
              Oscuro
            </button>
          </div>
          {/* Additional customization options can be added here */}
        </div>
      </DialogDescription>
      <div className="px-5 pb-4 bg-bolt-elements-background-depth-2 flex gap-2 justify-end">
        <DialogButton type="secondary" onClick={onClose}>
          Cancelar
        </DialogButton>
        <DialogButton type="primary" onClick={onClose}>
          Guardar
        </DialogButton>
      </div>
    </Dialog>
  );
};


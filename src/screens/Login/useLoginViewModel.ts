import { useDispatch } from 'react-redux';
import { useState } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import { login } from '../../store/authSlice';

export const useLoginViewModel = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Функция для выполнения биометрической аутентификации перед входом
   */
  const handleBiometricAuth = async () => {
    setIsLoading(true);
    try {
      const isSupported = await LocalAuthentication.hasHardwareAsync();
      if (!isSupported) {
        setError('Ваше устройство не поддерживает биометрическую аутентификацию.');
        return;
      }

      const hasBiometrics = await LocalAuthentication.isEnrolledAsync();
      if (!hasBiometrics) {
        setError('Нет зарегистрированных биометрических данных.');
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Авторизуйтесь для доступа к TODO списку',
        fallbackLabel: 'Введите PIN',
      });

      if (result.success) {
        dispatch(login({ token: 'secured-access-token' })); // Добавляем токен при успешной авторизации
      } else {
        setError('Аутентификация отменена или не удалась.');
      }
    } catch (e: any) {
      setError(`Ошибка: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleBiometricAuth,
    isLoading,
    error,
  };
};

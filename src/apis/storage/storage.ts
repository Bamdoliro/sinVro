import AsyncStorage from '@react-native-async-storage/async-storage';

export class Storage {
  static getItem(key: string): Promise<string | null> {
    return AsyncStorage.getItem(key);
  }

  static setItem(key: string, value: string): Promise<void> {
    return AsyncStorage.setItem(key, value);
  }

  static removeItem(key: string): Promise<void> {
    return AsyncStorage.removeItem(key);
  }

  static clear(): Promise<void> {
    return AsyncStorage.clear();
  }
}

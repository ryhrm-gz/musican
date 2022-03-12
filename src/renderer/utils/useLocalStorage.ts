import { useLocalStorageValue } from "@mantine/hooks";

export const useLocalStorage = <T extends string>({
  key,
  defaultValue,
}: {
  key: string;
  defaultValue?: T;
}): [T, (val: T | ((prevState: T) => T)) => void] => {
  const [value, setValue] = useLocalStorageValue({ key, defaultValue });
  return [value, setValue];
};

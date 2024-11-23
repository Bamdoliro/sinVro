import { useSelctCharacterMutation } from 'services/character/mutations';
import { SelectCharacter } from 'types/Character/remote';

export const useCTAButton = (type: string) => {
  const character: SelectCharacter = { type };
  const { postSelectCharacterMutate } = useSelctCharacterMutation(character);

  const handleSelectCharacter = () => {
    postSelectCharacterMutate();
  };

  return { handleSelectCharacter };
};

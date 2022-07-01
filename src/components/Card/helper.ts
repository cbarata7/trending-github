import { languageColors } from '../../helpers/languageColors'

export const findColorFromLanguage = (languageFromRepo: string) => {
    const foundMatch = languageColors.find(
        ({ language }) => language === languageFromRepo,
    )

    return foundMatch?.color || '#000000'
}

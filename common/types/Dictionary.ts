import { type getDictionary } from '@/utils/getDictionary/get-dictionary';

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;


export interface MaskFunction {
  (value: string): string;
}

class MaskService{
    public phoneMask: MaskFunction = (value: string) => {
        return value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/, '($1) $2') 
        .replace(/(\d{5})(\d)/, '$1-$2') 
        .slice(0, 15); 
    }
}

export default new MaskService();
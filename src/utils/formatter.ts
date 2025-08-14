class Formatter {
  static FormatCurrency(price?: number) {
    if (!price) 
      return '';

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  }

  static ParseCurrency(price?: string) {
    if (price === undefined || price === null)
      return 0;

    const numericValue = price.replace(/\D/g, '');
    return numericValue ? (Number(numericValue) / 100) : 0;
  }
}

export default Formatter;
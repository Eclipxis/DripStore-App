class Formatter {
  static Money(price?: number): string {
    if (!price) 
      return ''

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  }
}

export default Formatter;
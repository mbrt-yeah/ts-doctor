const dasherizeCamelCasedString = function(camelCasedString: string): string {
    return camelCasedString.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
};

export { dasherizeCamelCasedString };

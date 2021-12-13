function obfuscate(link, name, server)
{
	document.write('<a href=\"mai');
        document.write('lto:' + name + '@' + server + '\">');
        document.write(link);
        document.write('</a>');
}

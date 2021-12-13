function obfuscate(link, name, server)
{
	document.write('<a href=\"mail');
        document.write('to:' + name + '@' + server + '\">');
        document.write(link);
        document.write('</a>');
}

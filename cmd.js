<?xml version="1.0"?>
<package>
<component id="PopCalc">
<script language="JScript">
<![CDATA[
var timeout = 0;
var buttons = 0; 
var icon = 48; 
var shell = new ActiveXObject("WScript.Shell");
shell.Popup("Well, hello there!", timeout, "window title", buttons + icon);
]]>
</script>
</component>
</package>

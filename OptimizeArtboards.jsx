/**
* MIT License
*
* Author: Matthew Hauth, PGA (http://www.microbrewmedia.com)
* Copyright (c) 2016 Microbrew Media, LLC
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

#target illustrator   
main();  
function main(){  
	if ( app.documents.length == 0 ) { return; }  
	var theDoc = app.activeDocument; // active doc  
	var totalArtboards = theDoc.artboards.length;
	for (i = 0; i < totalArtboards ; i++) {
	    theDoc.artboards.setActiveArtboardIndex(i);
	    theDoc.selectObjectsOnActiveArtboard(i);
	    theDoc.fitArtboardToSelectedArt(i); 
	    theDoc.selection = null;  
	}
}

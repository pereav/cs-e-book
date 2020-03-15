export const CHAPTER9 = {
	read_status: 'Disabled',
	title: 'Chapter IX',
	description: `<h1 align = center>CHAPTER 9</h1>
				<h2 align = center>ASSEMBLING, LINKING, AND RUNNING THE PROGRAM</h2>`,
	objectives: [
		`Differentiate the methods of how to assemble, link and execute assembly program.`,
		`Assemble a source program, link and object module, and execute assembly language code.`,
		`Recognize the role of the assembler and linker in running the program.`
	],
	sub: [
		{
			read_status: 'Disabled',
			title: 'How to Assemble a Source Program',
			content: `
			<b> HOW TO ASSEMBLE A SOURCE PROGRAM </b>
			<br/>
			<br/>

<p>From the DOS prompt, type the following : tasm, followed by a space, the base name and press ENTER key.</p>
<p>Example:</p>
		<div class="terminal-box">
			C:\\>TASM MYPROG
		</div>

<p>This command calls up the Turbo <b>AS</b>se<b>M</b>bler (TASM). It creates an object module or an OBJ file (in this case, myprog.obj). If there are no errors in you program, the assembler will put on view somewhat like this on the screen:</p>

	<div class="terminal-box">
		C:\\>TASM MYPROG
		<br/> Turbo Assembler version 2.01 Copyright © 1988, 1990
		<br/> Borland International
		<br/>
		<br/> Assembling file: MYPROG.ASM
		<br/> Error message : None
		<br/> Warning message : None
		<br/> Passes : 1
		<br/> Remaining memory : 408K
		<br/>
	 	<br/> C:\\> _

	</div>

<p> Otherwise, assembler will show the following results of the assembly process: </p>

	<div class="terminal-box">
		C:\\>TASM MYPROG
		<br/> Turbo Assembler version 2.01 Copyright © 1988, 1990
		<br/> Borland International
	 	<br/> 
		<br/> Assembling file: MYPROG.ASM
		<br/> Error message : 1
		<br/> ** Error ** MYPROG.ASM (6) undefined sysmbol : kumusta
		<br/> Warning message : None
		<br/> Passes : 1
		<br/> Remaining memory : 408K
		<br/> 
		<br/> C:\\> _
	</div>
			`,
		},
		{
			read_status: 'Disabled',
			title: 'How to Find and Correct Errors',
			content: `
			<b> HOW TO FIND AND CORRECT ERRORS </b>
			<br/>
			<br/>

<p>The illustration below displays the result of the assembly process. Line numbers are showed on the screen where you committed the errors including the corresponding error message. To correct your program pay attention to the line numbers where you have errors and open the text editor again for you to modify the program.</p>

	<div class="terminal-box">
		C:\\>TASM MYPROG
		<br/> Turbo Assembler version 2.01 Copyright © 1988, 1990
		<br/> Borland International
		<br/> 
		<br/> Assembling file: MYPROG.ASM
		<br/> Error message : None
		<br/> Warning message : None
		<br/> Passes : 1
		<br/> Remaining memory : 408K
		<br/> 
		C:\\> _
	</div>
			`,
			sub: []
		},
		{
			read_status: 'Disabled',
			title: 'How to Link an Object Program',
			content: `
			<b> HOW TO LINK AN OBJECT PROGRAM </b>
			<br/>
			<br/>

<p>After a succesful assembly (i.e. no errors encountered in your program), type link, press space bar, type the base name and press ENTER key on the command prompt:</p>
<p>Example :</p>
	
	<div class="terminal-box">
		C:\\>TLINK MYPROG	\/t
	</div>


<p>This command calls the Turbo LINK (TLINK) and combines one or more subject files into single module which is a .COM file, Also, it creates a .MAP file which list exactly how much space in memory your program occupies when it is running. In our example, the files that were produced are myprog.map and myprog.exe. Be reminded that you cannot link and object module unless there are no errors in your program.</p>

	<div class='terminal-box'>
		C:\\>TASM MYPROG
		<br/> Turbo Assembler version 2.01 Copyright © 1988, 1990 Borland International
		<br/>
		<br/> C:\\> _
	</div>

			`,
			sub: []
		},
		{
			read_status: 'Disabled',
			title: 'How to Execute a Program',
			content: `
			<b> HOW TO EXECUTE A PROGRAM </b>
			<br/>
			<br/>

<p>To run your program, just type the base name of the executable file myprog.exe and press ENTER key on the command prompt.</p>

	<div class='terminal-box'>
		C\\>MYPROG
	</div>

<p>After which, the program will output the message - "Kumusta, RTU!" right before your screen.</p>

<p>
	<b>To recapitulate the overall process</b>
	Step 1 : Open the text editor by typing edit myprog.asm and press ENTER key
	<br/> Step 2 : Start keying your program,
	<br/> Step 3 : Save your work (press Alt-F, choose Save and press ENTER key). 
	<br/> Step 4 : Exit the editor and go back to DOS environment (press ALT-F, choose Save and press ENTER key).
	<br/> Step 5 : Assemble the program by typing <i>tasm myprog.asm</i> and press ENTER key. 
	<br/> Step 6 : If there are no errors in your program, do the next step (Step 7), otherwise, repeat Step 1 to 5 and rectify your work.
	<br/> Step 7 : Link the object file by typing <i>tlink myprog /t</i> and press ENTER KEY. 
	<br/> Step 8 : Type <i>myprog</i> and press ENTER key to execute the program.
	<br/> And voila ! Your program is running.
</p>
			`,
			sub: []
		}
	]
};
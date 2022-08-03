var screen = document.getElementById("miCanvas");
        var pencil = screen.getContext("2d");
        var miWidth = 1200;
        var miHeight = 550;

        pencil.fillStyle = "lightgrey";
        pencil.fillRect(0,0,miWidth,miHeight);

        var colors = ["limegreen", "blue", "red", "darkviolet", "crimson", "cyan", "fuchsia", "teal", "gold", "orangered", ]; 

        function circles(Cx,Cy,radio,color){
            pencil.fillStyle = color;
            pencil.beginPath();
            pencil.arc(Cx,Cy,radio,0,2*Math.PI);
            pencil.fill();
        }

        var px; 
        var py; 
        var delay = 1000; 
        var i = 0; 

        function clearing(){
            pencil.clearRect(0,0,miWidth,miHeight); 
            pencil.fillStyle = "#d4e0e6"; 
            pencil.fillRect(0, 0, miWidth, miHeight); 
            px = Math.round(Math.random()*(miWidth -60)+30); 
            py = Math.round(Math.random()*(miHeight -60)+30); 
            circles(px, py, 30, colors[i],0,2*Math.PI); 
            circles(px, py, 20, "ghostwhite",0,2*Math.PI); 
            circles(px, py, 10, colors[i],0,2*Math.PI); 
            justOneClick = 0; 
        };

        setInterval(clearing,delay);       
        var ptsJS = 0;
        justOneClick = 0; 
        document.getElementById("pts").innerHTML = `${ptsJS}`; 

        function clickDetected(evento){
            var x = evento.pageX - screen.offsetLeft; 
            var y = evento.pageY - screen.offsetTop; 

            if((x<px+15)&&(x>px-15)&&(y<py+15)&&(y>py-15)&&(justOneClick==0)){ 
                ptsJS++; 
                justOneClick++; 
            };
            document.getElementById("pts").innerHTML = `${ptsJS}`;
        };

        function rightClick(evento){
            i++; 
            if(i >= colors.length){
                i = 0;
            };
            return false; 
        };

        screen.onclick = clickDetected;
        screen.oncontextmenu = rightClick; 
    
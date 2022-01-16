var modal = document.getElementById("myModal");

document.addEventListener('contextmenu', event => event.preventDefault());

var workshopModal1 = document.getElementById("workshop_modal1");
var workshopModal2 = document.getElementById("workshop_modal2");
var workshopModal3 = document.getElementById("workshop_modal3");
var workshopModal4 = document.getElementById("workshop_modal4");
var workshopModal5 = document.getElementById("workshop_modal5");
var workshopModal6 = document.getElementById("workshop_modal6");

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

workshopModal1.onclick = function () {
    modal.style.display = "block";
    document.getElementById("modal_heading").innerHTML = "INTRODUCTION TO INDUSTRY 4.0<br>AND INDUSTRIAL IOT (IIOT)";  
    document.getElementById("modal_descriptionPara").innerHTML = "ASME offers an opportunity for the budding engineers to explore their future work environment. \
        This workshop introduces the participants into the world of Industry 4.0 and IIoT with the aid of relevant case studies and state of the art learning kits. \
        The relevant areas of discussion that would be covered by the workshop are: Industry 4.0, Additive Manufacturing, Virtual Reality and Augmented Reality in modern-day \
        industries and Industrial IoT(IIoT)(Kepware,Thingworx). All these would be supplemented with relevant case studies and live demos.";
    document.getElementById("session1").innerHTML = "SESSION 1: INTRODUCTION TO INDUSTRY 4.0";
    document.getElementById("session1_Para").innerHTML = "There would be a detailed introduction to Industry 4.0 which encompasses various elements of the same. The participants would be given \
            an awareness about how the job opportunities within India are changing after the adaptation of Industry 4.0. Moreover, there would be discussion about the research projects being carried out at \
            Industry 4.0 Research Lab under the department of Mechanical Engineering, PSG College of technology.";
    document.getElementById("session2").innerHTML = "SESSION 2: ADDITIVE MANUFACTURING";
    document.getElementById("session2_Para").innerHTML = "The participants would be provided with a short lecture about additive manufacturing and relevant videos based on \
            unique and innovative applications of additive manufacturing would be showcased.";
    document.getElementById("session3").innerHTML = "SESSION 3: VIRTUAL REALITY (VR) AND AUGMENTED REALITY (AR)";
    document.getElementById("session3_Para").innerHTML = "The session would be kickstarted with a brief introduction about VR and AR. Then, the instructor \
            would demonstrate the application of these technologies in modern-day industries through a live demo.";
    document.getElementById("session4").innerHTML = "SESSION 4: INDUSTRIAL IOT";
    document.getElementById("session4_Para").innerHTML = "After explaining the basic concepts, the guest speaker would demonstrate various case studies based on this topic. \
            This session would be concluded after live demonstrations about ‘Kepware’ and ‘Thingworx’.";
    document.getElementById("fees").innerHTML = "For PSG Students: Rs.100<br>For Non-PSG Students: Rs.200"
    document.getElementById("time").innerHTML = "8:30 A.M to 1:30 P.M";
    document.getElementById("date").innerHTML = "February 19, 2022";
    document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/918281875836\"target=\"_blank\">Athul Menon V - 8281875836</a><br><a class=\"whatsapp\"href=\"https://wa.me/916379448148\"target=\"_blank\">Neo Tarun V - 6379448148</a>";
    document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/916384544377\"target=\"_blank\">Logesh K - 6384544377</a><br><a class=\"whatsapp\"href=\"https://wa.me/918754655235\"target=\"_blank\">Sriram A - 8754655235</a>";
    document.getElementById('modal_start').scrollIntoView();
}

workshopModal2.onclick = function () {
    modal.style.display = "block";
    document.getElementById("modal_heading").innerHTML = "INTRODUCTION TO FUSION 360";  
    document.getElementById("modal_descriptionPara").innerHTML = "Fusion 360 is important for Mechanical eNgineers because it is a utility software tool that can do everything in one place. One can create 3D designs, collaborate, manage data, create toolpaths, run simulations \
            to validate designs and mush more. It is a next generation design tool that will enable aspiring engineers to bring to life their ideas and contribute to society. In this workshop, participants will be a part of hands-on one day course that will cover the basics of \
            AutoDesk Fusion 360 and provide exposure to spome of its numerous capabilities.";
    document.getElementById("session1").innerHTML = "SESSION 1";
    document.getElementById("session1_Para").innerHTML = "<h4>TOPICS THAT WILL BE COVERED:</h4>Workspaces; Editing Preferences; Browser and Timeline; Data Panel and A360 Collaborations; Marketing Menu and Toolbox; Sketch Tools; Sketch Constraints; Extrude and Resolve (Editing a Sketch); \
            Fillet and Chamber; Direct Modelling; Press Pull; Components; Joints; Construction Planes; Inspect, Measure, Section Analysis.";
    document.getElementById("session2").innerHTML = "SESSION 2";
    document.getElementById("session2_Para").innerHTML = "<h4>TOPICS THAT WILL BE COVERED:</h4>Part Creation; Assembly; Importing McMaster Carr Components; T-Spline Modelling; Assigning Materials; Render Environment Configuration - Adjusting Lighting, Importing Scenes, Cloud/Local Rendering, Exporting; \
            Documentation; Exporting file.";
    document.getElementById("session3").innerHTML = "";
    document.getElementById("session3_Para").innerHTML = "";
    document.getElementById("session4").innerHTML = "";
    document.getElementById("session4_Para").innerHTML = "";
    document.getElementById("fees").innerHTML = "For PSG Students: NIL<br>For Non-PSG Students: NIL"
    document.getElementById("time").innerHTML = "";
    document.getElementById("date").innerHTML = "February 20, 2022";
    document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919487105235\"target=\"_blank\">Dwarakesh M - 9487105235</a><br><a class=\"whatsapp\"href=\"https://wa.me/917893686163\"target=\"_blank\">Revanth Kumar Reddy - 7893686163</a>";
    document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/918903734119\"target=\"_blank\">Kiruthik Vishagan K - 8903734119</a><br><a class=\"whatsapp\"href=\"https://wa.me/917358588868\"target=\"_blank\">Saadhvik - 7358588868</a>";
    document.getElementById('modal_start').scrollIntoView();
}

workshopModal3.onclick = function () {
    modal.style.display = "block";
    document.getElementById("modal_heading").innerHTML = "MOBILE APPLICATION DEVELOPMENT";  
    document.getElementById("modal_descriptionPara").innerHTML = "Learn to code and lead to build your Android app.<br>Learn essential Android programming concepts and build a variety of apps using Java/Kotlin and flutter. \
        Become a native mobile app developer with proficiency in all aspects of mobile applications from design to build for Android via this app development workshop. \
        This workshop also provides learning simple app development using Flutter which is a cross-platform framework for both IOS and Android. \
        The technologies used to create these apps are expanding and improving quickly, so it’s an exciting time to start learning Mobile Development!";
    document.getElementById("session1").innerHTML = "";
    document.getElementById("session1_Para").innerHTML = "";
    document.getElementById("session2").innerHTML = "";
    document.getElementById("session2_Para").innerHTML = "";
    document.getElementById("session3").innerHTML = "";
    document.getElementById("session3_Para").innerHTML = "";
    document.getElementById("session4").innerHTML = "";
    document.getElementById("session4_Para").innerHTML = "";
    document.getElementById("fees").innerHTML = "For PSG Students: Rs.800<br>For Non-PSG Students: Rs.800";
    document.getElementById("time").innerHTML = "9:00 AM to 4:30 PM";
    document.getElementById("date").innerHTML = "February 20, 2022";
    document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/918903332299\"target=\"_blank\">Rishitha V - 8903332299</a><br><a class=\"whatsapp\"href=\"https://wa.me/919942648418\"target=\"_blank\">Kathirvel C - 9942648418</a>";
    document.getElementById("volunteers").innerHTML = "---";
    document.getElementById('modal_start').scrollIntoView();
}

workshopModal4.onclick = function () {
    modal.style.display = "block";
    document.getElementById("modal_heading").innerHTML = "INDUSTRIAL MICROSCOPIC AND<br>SPECTROSCOPIC ANALYSIS OF MATERIALS";  
    document.getElementById("modal_descriptionPara").innerHTML = "The mission of the workshop is to deepen the understanding about microscopic and spectroscopic techniques and to find new directions for future research and \
        development. The workshop will provide a working knowledge of several characterization techniques like Scanning Electron Microscopy, Optical Emission Spectroscopy, etc and how \
        these methods are used to characterize material properties. In addition, the workshop focuses on visual demos of a few important microscopy and spectroscopy techniques. Learning Outcome: \
        Practical knowledge of industrial characterization techniques along with tools.";
    document.getElementById("session1").innerHTML = "SESSION 1";
    document.getElementById("session1_Para").innerHTML = "Session 1 focuses on making participants know what material characterization is and \
            to make them understand different microscopy and spectroscopy techniques with explaining the \
            background and fundamentals behind it. This will be followed by exploring its various \
            application areas and its pros and limitations.";
    document.getElementById("session2").innerHTML = "SESSION 2";
    document.getElementById("session2_Para").innerHTML = "Session 2 of the workshop focuses on a visual demo of some microscopy and \
            spectroscopy techniques with assessing a few sample materials. Participants will gain practical \
            knowledge of the measurement techniques along with the tools to get the most out of their instrumentation.";
    document.getElementById("session3").innerHTML = "";
    document.getElementById("session3_Para").innerHTML = "";
    document.getElementById("session4").innerHTML = "";
    document.getElementById("session4_Para").innerHTML = "";
    document.getElementById("fees").innerHTML = "For PSG Students: Rs.100<br>For Non-PSG Students: Rs.150"
    document.getElementById("time").innerHTML = "";
    document.getElementById("date").innerHTML = "February 20, 2022";
    document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919944701899\"target=\"_blank\">Shakthi Bharani T - 9944701899</a><br><a class=\"whatsapp\"href=\"https://wa.me/916385870487\"target=\"_blank\">Thamizhini R - 6385870487</a>";
    document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919865968708\"target=\"_blank\">Dinesh Kumar S - 9865968708</a><br><a class=\"whatsapp\"href=\"https://wa.me/918825718487\"target=\"_blank\">Gowrish M N V  - 8825718487</a>";
    document.getElementById('modal_start').scrollIntoView();
}

workshopModal5.onclick = function () {
    modal.style.display = "block";
    document.getElementById("modal_heading").innerHTML = "INTERNET OF THINGS FOR<br>MECHANICAL APPLICATION";  
    document.getElementById("modal_descriptionPara").innerHTML = "From the basics of IoT to Cloud Computing, the workshop has everything that you would need to get started on your next IoT project.<br> \
        The workshop focuses on the basic conceptual ideas behind the characteristics, challenges and Network configurations of IoT along with \
        Data Collection, Data Processing and Data Analytic Including Cloud Computing and Big data. It also focuses on the MQTT usage of various \
        Embedded systems (Arduino, Ti,and Raspberry). In addition, the workshop will be on online Mode.";
    document.getElementById("session1").innerHTML = "SESSION 1";
    document.getElementById("session1_Para").innerHTML = "Introduction to the basic concepts of IOT.";
    document.getElementById("session2").innerHTML = "SESSION 2";
    document.getElementById("session2_Para").innerHTML = "A brief description about the Data Collection (Sensor Module).";
    document.getElementById("session3").innerHTML = "SESSION 3";
    document.getElementById("session3_Para").innerHTML = "About the MQTT protocol using Data Processing Followed by the Data Analytics techniques.";
    document.getElementById("session4").innerHTML = "SESSION 4";
    document.getElementById("session4_Para").innerHTML = "An interactive hands-on training with IOT kit";
    document.getElementById("fees").innerHTML = "For PSG Students: Rs.300<br>For Non-PSG Students: Rs.350";
    document.getElementById("time").innerHTML = "9:30 AM to 4:30 PM";
    document.getElementById("date").innerHTML = "February 19, 2022";
    document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/918098197192\"target=\"_blank\">Kaviguhan C - 8098197192</a><br><a class=\"whatsapp\"href=\"https://wa.me/919080066994\"target=\"_blank\">Suchithra S - 9080066994</a>";
    document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/916385449606\"target=\"_blank\">Deepa S - 6385449606</a><br><a class=\"whatsapp\"href=\"https://wa.me/919360581334\"target=\"_blank\">Kavi Prem G - 9360581334</a>";
    document.getElementById('modal_start').scrollIntoView();
}

workshopModal6.onclick = function () {
    modal.style.display = "block";
    document.getElementById("modal_heading").innerHTML = "THERMO-MECHANICAL SIMULATION<br>FOR MANUFACTURING";  
    document.getElementById("modal_descriptionPara").innerHTML = "Get ready to fascinate the thermal mechanical simulation!<br>Today, Engineers use computers and software in the design and manufature of most products, processes and systems. This Workshop, \
            Thermo Mechanical Simulation - Gleeble 3500, a complete family of research tool to improve materials, optimize processes and increase profits";
    document.getElementById("session1").innerHTML = "SESSION 1";
    document.getElementById("session1_Para").innerHTML = "Participants will undergo lecture about Thermo Mechanical Simulation and Gleeble 3500 for particular period of time. In this lecture, participants will gain knowledge regarding the principles of Gleeble 3500. \
            An interactive meeting place for the students to discuss how Gleeble 3500 can help to solve material challenges. Any doubt and clarification among participants will be solved.";
    document.getElementById("session2").innerHTML = "SESSION 2";
    document.getElementById("session2_Para").innerHTML = "After the lecture, participants will be shown a recorded video of Welding COE (Center of Excellence) Lab where Gleeble 3500 is present. The video will describe about the process, parts, setup, working, etc. \
            Temperature related test will be shown to the participants to gain the deep knowledge of the simulator. Test like NST, NDT are planned to be carried out. System related simulation will also be shown.";
    document.getElementById("session3").innerHTML = "";
    document.getElementById("session3_Para").innerHTML = "";
    document.getElementById("session4").innerHTML = "";
    document.getElementById("session4_Para").innerHTML = "";
    document.getElementById("fees").innerHTML = "For PSG Students: Rs.100<br>For Non-PSG Students: Rs.150"
    document.getElementById("time").innerHTML = "9:30 AM to 4:30 PM";
    document.getElementById("date").innerHTML = "February 19, 2022";
    document.getElementById("convenors").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/917402735000\"target=\"_blank\">Dhisan A - 7402735000</a><br><a class=\"whatsapp\"href=\"https://wa.me/916381845541\"target=\"_blank\">Kavya S - 6381845541</a>";
    document.getElementById("volunteers").innerHTML = "<a class=\"whatsapp\"href=\"https://wa.me/919361396918\"target=\"_blank\">Ananthi priya A - 9361396918</a><br><a class=\"whatsapp\"href=\"https://wa.me/919688775280\"target=\"_blank\">Logeshwaran M - 9688775280</a>";
    document.getElementById('modal_start').scrollIntoView();
}

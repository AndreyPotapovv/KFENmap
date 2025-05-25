const Floor2 = ({ selectedId ,onSelect }) => {
  console.log("onSelect есть:", typeof onSelect === "function");
  return (
  <svg
    viewBox="0 0 2560 1440"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      pointerEvents: "auto",
    }}
  >
    <g id="2floor 1">
    <rect id="288" fillOpacity={selectedId === "288" ? 0.6 : 0.25} x="173" y="546" width="94" height="80" fill="#003CFF" onClick={() => onSelect('288')} />
    <rect id="284" fillOpacity={selectedId === "284" ? 0.6 : 0.25} x="48" y="546" width="66" height="128" fill="#003CFF" onClick={() => onSelect('284')} />
    <rect id="290" fillOpacity={selectedId === "290" ? 0.6 : 0.25} x="267" y="546" width="94" height="80" fill="#003CFF" onClick={() => onSelect('290')} />
    <rect id="292" fillOpacity={selectedId === "292" ? 0.6 : 0.25} x="363" y="546" width="94" height="80" fill="#003CFF" onClick={() => onSelect('292')} />
    <rect id="Большой спортзал" fillOpacity={selectedId === "Большой спортзал" ? 0.6 : 0.25} x="48" y="324" width="499" height="220" fill="#003CFF" onClick={() => onSelect('Большой спортзал')} />
    <rect id="294" fillOpacity={selectedId === "294" ? 0.6 : 0.25} x="457" y="546" width="90" height="80" fill="#003CFF" onClick={() => onSelect('294')} />
    <path id="262" fillOpacity={selectedId === "262" ? 0.6 : 0.25} d="M492 746H550L545 770.5L536.5 806H492V746Z" fill="#003CFF" onClick={() => onSelect('262')} />
    <path id="278" fillOpacity={selectedId === "278" ? 0.6 : 0.25} d="M48 746.5H179.5V771V805.5H59L53.5 778.5L48 746.5Z" fill="#003CFF" onClick={() => onSelect('278')} />
    <path id="276" fillOpacity={selectedId === "276" ? 0.6 : 0.25} d="M62 806H179V826.763V856H71.7871L66.8935 833.119L62 806Z" fill="#003CFF" onClick={() => onSelect('276')} />
    <path id="274" fillOpacity={selectedId === "274" ? 0.6 : 0.25} d="M69.5 855.5H179V873.763V976.5L119 935L82.5 877L69.5 855.5Z" fill="#003CFF" onClick={() => onSelect('274')} />
    <rect id="280" fillOpacity={selectedId === "280" ? 0.6 : 0.25} x="48" y="674" width="131" height="70" fill="#003CFF" onClick={() => onSelect('280')} />
    <rect id="266" fillOpacity={selectedId === "266" ? 0.6 : 0.25} x="413" y="808" width="39" height="95" fill="#003CFF" onClick={() => onSelect('266')} />
    <rect id="Малый спортзал" fillOpacity={selectedId === "Малый спортзал" ? 0.6 : 0.25} x="220" y="746" width="192" height="246" fill="#003CFF" onClick={() => onSelect('Малый спортзал')} />
    <path id="260" fillOpacity={selectedId === "260" ? 0.6 : 0.25} d="M492 808H537L530.963 845.882L492 920V900.235V808Z" fill="#003CFF" onClick={() => onSelect('260')} />
    <rect id="256" fillOpacity={selectedId === "256" ? 0.6 : 0.25} x="547" y="437" width="67" height="107" fill="#5EB92D" onClick={() => onSelect('256')} />
    <rect id="254" fillOpacity={selectedId === "254" ? 0.6 : 0.25} x="616" y="437" width="60" height="107" fill="#5EB92D" onClick={() => onSelect('254')} />
    <rect id="285" fillOpacity={selectedId === "285" ? 0.6 : 0.25} x="603" y="584" width="70" height="94" fill="#5EB92D" onClick={() => onSelect('285')} />
    <rect id="283" fillOpacity={selectedId === "283" ? 0.6 : 0.25} x="673" y="584" width="75" height="94" fill="#5EB92D" onClick={() => onSelect('283')} />
    <rect id="281" fillOpacity={selectedId === "281" ? 0.6 : 0.25} x="750" y="584" width="84" height="94" fill="#5EB92D" onClick={() => onSelect('281')} />
    <rect id="279" fillOpacity={selectedId === "279" ? 0.6 : 0.25} x="834" y="584" width="110" height="94" fill="#5EB92D" onClick={() => onSelect('279')} />
    <rect id="277" fillOpacity={selectedId === "277" ? 0.6 : 0.25} x="942" y="584" width="138" height="94" fill="#5EB92D" onClick={() => onSelect('277')} />
    <path id="263" fillOpacity={selectedId === "263" ? 0.6 : 0.25} d="M1080 677H1303V773L1123.5 862.5L1080 828.5V677Z" fill="#4296E4" onClick={() => onSelect('263')} />
    <rect id="250" fillOpacity={selectedId === "250" ? 0.6 : 0.25} x="723" y="438" width="54" height="107" fill="#5EB92D" onClick={() => onSelect('250')} />
    <rect id="248" fillOpacity={selectedId === "248" ? 0.6 : 0.25} x="777" y="438" width="60" height="107" fill="#5EB92D" onClick={() => onSelect('248')} />
    <rect id="246" fillOpacity={selectedId === "246" ? 0.6 : 0.25} x="837" y="438" width="54" height="107" fill="#5EB92D" onClick={() => onSelect('246')} />
    <rect id="244" fillOpacity={selectedId === "244" ? 0.6 : 0.25} x="891" y="438" width="58" height="107" fill="#5EB92D" onClick={() => onSelect('244')} />
    <rect id="242" fillOpacity={selectedId === "242" ? 0.6 : 0.25} x="949" y="438" width="60" height="107" fill="#5EB92D" onClick={() => onSelect('242')} />
    <rect id="240" fillOpacity={selectedId === "240" ? 0.6 : 0.25} x="1011" y="439" width="62" height="107" fill="#5EB92D" onClick={() => onSelect('240')} />
    <rect id="238" fillOpacity={selectedId === "238" ? 0.6 : 0.25} x="1073" y="439" width="53" height="107" fill="#5EB92D" onClick={() => onSelect('238')} />
    <rect id="234" fillOpacity={selectedId === "234" ? 0.6 : 0.25} x="1182" y="439" width="54" height="107" fill="#5EB92D" onClick={() => onSelect('234')} />
    <rect id="236" fillOpacity={selectedId === "236" ? 0.6 : 0.25} x="1128" y="439" width="54" height="107" fill="#5EB92D" onClick={() => onSelect('236')} />
    <rect id="228" fillOpacity={selectedId === "228" ? 0.6 : 0.25} x="1342" y="415" width="192" height="131" fill="#3799E9" onClick={() => onSelect('228')} />
    <rect id="228a" fillOpacity={selectedId === "228a" ? 0.6 : 0.25} x="1284" y="462" width="58" height="84" fill="#5EB92D" onClick={() => onSelect('228a')} />
    <rect id="F" fillOpacity={selectedId === "F" ? 0.6 : 0.25} x="1080" y="584" width="63" height="93" fill="white" onClick={() => onSelect('F')} />
    <rect id="M" fillOpacity={selectedId === "M" ? 0.6 : 0.25} x="1143" y="584" width="63" height="93" fill="white" onClick={() => onSelect('M')} />
    <path id="239" fillOpacity={selectedId === "239" ? 0.6 : 0.25} d="M1516.5 813L1630.5 796.5V885.5L1543 896L1516.5 813Z" fill="#5EB92D" onClick={() => onSelect('239')} />
    <path id="241" fillOpacity={selectedId === "241" ? 0.6 : 0.25} d="M1433 830.5L1515.5 812L1541 897L1462 915L1433 830.5Z" fill="#5EB92D" onClick={() => onSelect('241')} />
    <path id="243" fillOpacity={selectedId === "243" ? 0.6 : 0.25} d="M1360 852.5L1432.5 832L1461 915L1393 934L1360 852.5Z" fill="#5EB92D" onClick={() => onSelect('243')} />
    <path id="245" fillOpacity={selectedId === "245" ? 0.6 : 0.25} d="M1229 908.5L1321 869.5L1353.5 949L1270.5 983.5L1229 908.5Z" fill="#4296E4" onClick={() => onSelect('245')} />
    <path id="247" fillOpacity={selectedId === "247" ? 0.6 : 0.25} d="M1119.5 969.5L1228.5 910L1269.5 984L1169 1039L1119.5 969.5Z" fill="#4296E4" onClick={() => onSelect('247')} />
    <path id="249" fillOpacity={selectedId === "249" ? 0.6 : 0.25} d="M1026 1033.5L1119.5 970L1168 1039L1081 1099L1026 1033.5Z" fill="#4296E4" onClick={() => onSelect('249')} />
    <path id="251" fillOpacity={selectedId === "251" ? 0.6 : 0.25} d="M934 1111.5L1026 1035L1079.5 1099L989 1177L934 1111.5Z" fill="#4296E4" onClick={() => onSelect('251')} />
    <rect id="224a" fillOpacity={selectedId === "224a" ? 0.6 : 0.25} x="1534" y="415" width="115" height="131" fill="#571616" onClick={() => onSelect('224a')} />
    <rect id="224" fillOpacity={selectedId === "224" ? 0.6 : 0.25} x="1734" y="415" width="70" height="131" fill="#692EB2" onClick={() => onSelect('224')} />
    <path id="231" fillOpacity={selectedId === "231" ? 0.6 : 0.25} d="M1937 804L1994 814L2042.5 827L2016 920.5L1920 900L1937 804Z" fill="#5EB92D" onClick={() => onSelect('231')} />
    <path id="233" fillOpacity={selectedId === "233" ? 0.6 : 0.25} d="M1827.5 792L1887.5 798L1937 805L1919.5 899.5L1824 885L1827.5 792Z" fill="#5EB92D" onClick={() => onSelect('233')} />
    <rect id="218" fillOpacity={selectedId === "218" ? 0.6 : 0.25} x="1926" y="431" width="78" height="115" fill="#FFA806" onClick={() => onSelect('218')} />
    <rect id="216" fillOpacity={selectedId === "216" ? 0.6 : 0.25} x="2004" y="431" width="72" height="115" fill="#FFA806" onClick={() => onSelect('216')} />
    <rect id="F" fillOpacity={selectedId === "F" ? 0.6 : 0.25} x="2040" y="588" width="53" height="90" fill="white" onClick={() => onSelect('F')} />
    <rect id="M" fillOpacity={selectedId === "M" ? 0.6 : 0.25} x="1987" y="588" width="53" height="90" fill="white" onClick={() => onSelect('M')} />
    <path id="235" fillOpacity={selectedId === "235" ? 0.6 : 0.25} d="M1703 788.5L1827 792L1823.5 885.5L1703 882V788.5Z" fill="#5EB92D" onClick={() => onSelect('235')} />
    <path id="229" fillOpacity={selectedId === "229" ? 0.6 : 0.25} d="M1804 678H2040V718.5H2028V788.5L1917 761L1804 751V678Z" fill="#5EB92D" onClick={() => onSelect('229')} />
    <rect id="214" fillOpacity={selectedId === "214" ? 0.6 : 0.25} x="2076" y="431" width="72" height="115" fill="#FFA806" onClick={() => onSelect('214')} />
    <rect id="212" fillOpacity={selectedId === "212" ? 0.6 : 0.25} x="2148" y="431" width="68" height="115" fill="#FFA806" onClick={() => onSelect('212')} />
    <rect id="210" fillOpacity={selectedId === "210" ? 0.6 : 0.25} x="2216" y="431" width="70" height="115" fill="#FFA806" onClick={() => onSelect('210')} />
    <rect id="208" fillOpacity={selectedId === "208" ? 0.6 : 0.25} x="2286" y="431" width="61" height="115" fill="#FFA806" onClick={() => onSelect('208')} />
    <rect id="206" fillOpacity={selectedId === "206" ? 0.6 : 0.25} x="2347" y="431" width="62" height="115" fill="#FFA806" onClick={() => onSelect('206')} />
    <rect id="204" fillOpacity={selectedId === "204" ? 0.6 : 0.25} x="2409" y="431" width="62" height="115" fill="#FFA806" onClick={() => onSelect('204')} />
    <rect id="215" fillOpacity={selectedId === "215" ? 0.6 : 0.25} x="2262" y="588" width="106" height="90" fill="#FFA806" onClick={() => onSelect('215')} />
    </g>
  </svg>
);
};

export default Floor2;
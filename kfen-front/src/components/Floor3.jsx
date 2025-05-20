const Floor3 = ({ selectedId ,onSelect }) => {
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
    <g id="3floor 1">
    <rect id="356" x="548" y="438" width="66" height="106" fill="#5EB92D" fillOpacity={selectedId === "356" ? 0.6 : 0.25} onClick={() => onSelect('356')} />
    <rect id="TK" x="50" y="326" width="498" height="416" fill="#484AED" fillOpacity={selectedId === "TK" ? 0.6 : 0.25} onClick={() => onSelect('TK')} />
    <rect id="389" x="603" y="584" width="81" height="93" fill="#5EB92D" fillOpacity={selectedId === "389" ? 0.6 : 0.25} onClick={() => onSelect('389')} />
    <rect id="387" x="684" y="584" width="90" height="93" fill="#5EB92D" fillOpacity={selectedId === "387" ? 0.6 : 0.25} onClick={() => onSelect('387')} />
    <rect id="385" x="774" y="584" width="81" height="93" fill="#5EB92D" fillOpacity={selectedId === "385" ? 0.6 : 0.25} onClick={() => onSelect('385')} />
    <rect id="383" x="855" y="584" width="71" height="93" fill="#5EB92D" fillOpacity={selectedId === "383" ? 0.6 : 0.25} onClick={() => onSelect('383')} />
    <rect id="381" x="926" y="584" width="76" height="93" fill="#5EB92D" fillOpacity={selectedId === "381" ? 0.6 : 0.25} onClick={() => onSelect('381')} />
    <rect id="379" x="1002" y="584" width="76" height="93" fill="#5EB92D" fillOpacity={selectedId === "379" ? 0.6 : 0.25} onClick={() => onSelect('379')} />
    <rect id="354" x="614" y="438" width="61" height="106" fill="#5EB92D" fillOpacity={selectedId === "354" ? 0.6 : 0.25} onClick={() => onSelect('354')} />
    <rect id="350" x="767" y="438" width="59" height="106" fill="#5EB92D" fillOpacity={selectedId === "350" ? 0.6 : 0.25} onClick={() => onSelect('350')} />
    <rect id="348" x="828" y="438" width="62" height="106" fill="#5EB92D" fillOpacity={selectedId === "348" ? 0.6 : 0.25} onClick={() => onSelect('348')} />
    <rect id="346" x="890" y="438" width="60" height="106" fill="#5EB92D" fillOpacity={selectedId === "346" ? 0.6 : 0.25} onClick={() => onSelect('346')} />
    <rect id="344" x="951" y="438" width="60" height="106" fill="#5EB92D" fillOpacity={selectedId === "344" ? 0.6 : 0.25} onClick={() => onSelect('344')} />
    <rect id="342" x="1012" y="438" width="57" height="106" fill="#5EB92D" fillOpacity={selectedId === "342" ? 0.6 : 0.25} onClick={() => onSelect('342')} />
    <rect id="340" x="1071" y="438" width="54" height="106" fill="#5EB92D" fillOpacity={selectedId === "340" ? 0.6 : 0.25} onClick={() => onSelect('340')} />
    <rect id="338" x="1127" y="438" width="54" height="106" fill="#5EB92D" fillOpacity={selectedId === "338" ? 0.6 : 0.25} onClick={() => onSelect('338')} />
    <rect id="336" x="1182" y="438" width="54" height="106" fill="#5EB92D" fillOpacity={selectedId === "336" ? 0.6 : 0.25} onClick={() => onSelect('336')} />
    <rect id="M" x="1143" y="585" width="62" height="91" fill="white" fillOpacity={selectedId === "M" ? 0.6 : 0.25} onClick={() => onSelect('M')} />
    <rect id="F" x="2041" y="587" width="51" height="91" fill="white" fillOpacity={selectedId === "F" ? 0.6 : 0.25} onClick={() => onSelect('F')} />
    <rect id="F" x="1079" y="585" width="64" height="91" fill="white" fillOpacity={selectedId === "F" ? 0.6 : 0.25} onClick={() => onSelect('F')} />
    <rect id="M" x="1984" y="587" width="57" height="91" fill="white" fillOpacity={selectedId === "M" ? 0.6 : 0.25} onClick={() => onSelect('M')} />
    <rect id="330" x="1342" y="415" width="113" height="128" fill="#692EB2" fillOpacity={selectedId === "330" ? 0.6 : 0.25} onClick={() => onSelect('330')} />
    <path id="355" d="M1230.5 909.5L1320 870.5L1352 949L1270 984L1230.5 909.5Z" fill="#4296E4" fillOpacity={selectedId === "355" ? 0.6 : 0.25} onClick={() => onSelect('355')} />
    <rect id="328" x="1458" y="416" width="118" height="128" fill="#692EB2" fillOpacity={selectedId === "328" ? 0.6 : 0.25} onClick={() => onSelect('328')} />
    <path id="349" d="M1544.5 807.5L1631 796V884.5L1559 894L1544.5 807.5Z" fill="#692EB2" fillOpacity={selectedId === "349" ? 0.6 : 0.25} onClick={() => onSelect('349')} />
    <path id="351" d="M1463 825L1543.5 808L1557.5 895L1487.5 909L1463 825Z" fill="#692EB2" fillOpacity={selectedId === "351" ? 0.6 : 0.25} onClick={() => onSelect('351')} />
    <path id="353" d="M1384 847L1460.5 825.5L1485.41 908.289L1417 927.5L1384 847Z" fill="#692EB2" fillOpacity={selectedId === "353" ? 0.6 : 0.25} onClick={() => onSelect('353')} />
    <path id="353a" d="M1322 869L1382.5 847.5L1415 928.5L1354.5 948L1322 869Z" fill="#692EB2" fillOpacity={selectedId === "353a" ? 0.6 : 0.25} onClick={() => onSelect('353a')} />
    <rect id="328_2" x="1579" y="416" width="111" height="128" fill="#692EB2" fillOpacity={selectedId === "328_2" ? 0.6 : 0.25} onClick={() => onSelect('328_2')} />
    <rect id="324" x="1691" y="415" width="114" height="128" fill="#692EB2" fillOpacity={selectedId === "324" ? 0.6 : 0.25} onClick={() => onSelect('324')} />
    <rect id="322" x="1806" y="463" width="75" height="81" fill="#692EB2" fillOpacity={selectedId === "322" ? 0.6 : 0.25} onClick={() => onSelect('322')} />
    <rect id="345" x="1703" y="790" width="44" height="92" fill="#692EB2" fillOpacity={selectedId === "345" ? 0.6 : 0.25} onClick={() => onSelect('345')} />
    <rect id="341" x="1792.32" y="790.125" width="39.7544" height="92.7758" transform="rotate(3.06981 1792.32 790.125)" fill="#692EB2" fillOpacity={selectedId === "341" ? 0.6 : 0.25} onClick={() => onSelect('341')} />
    <rect id="339" x="1836.29" y="793.75" width="46.6709" height="92.7758" transform="rotate(5.02675 1836.29 793.75)" fill="#692EB2" fillOpacity={selectedId === "339" ? 0.6 : 0.25} onClick={() => onSelect('339')} />
    <path id="337" d="M1885 797.5L1935.5 804.5L1919 898L1876.26 890.874L1885 797.5Z" fill="#692EB2" fillOpacity={selectedId === "337" ? 0.6 : 0.25} onClick={() => onSelect('337')} />
    <path id="335" d="M1937.36 804.178L1987.95 815.539L1963.62 907.773L1920.91 896.954L1937.36 804.178Z" fill="#692EB2" fillOpacity={selectedId === "335" ? 0.6 : 0.25} onClick={() => onSelect('335')} />
    <path id="333" d="M1989 815L2041 827.5L2013.5 919.088L1967 908L1989 815Z" fill="#692EB2" fillOpacity={selectedId === "333" ? 0.6 : 0.25} onClick={() => onSelect('333')} />
    <path id="343" d="M1748 790H1790L1786 882L1748 880.5V790Z" fill="#692EB2" fillOpacity={selectedId === "343" ? 0.6 : 0.25} onClick={() => onSelect('343')} />
    <rect id="318" x="1926" y="431" width="61" height="113" fill="#FFA806" fillOpacity={selectedId === "318" ? 0.6 : 0.25} onClick={() => onSelect('318')} />
    <rect id="316" x="1988" y="431" width="61" height="113" fill="#FFA806" fillOpacity={selectedId === "316" ? 0.6 : 0.25} onClick={() => onSelect('316')} />
    <rect id="314" x="2051" y="431" width="63" height="113" fill="#FFA806" fillOpacity={selectedId === "314" ? 0.6 : 0.25} onClick={() => onSelect('314')} />
    <rect id="312" x="2116" y="431" width="62" height="113" fill="#FFA806" fillOpacity={selectedId === "312" ? 0.6 : 0.25} onClick={() => onSelect('312')} />
    <rect id="310" x="2178" y="431" width="62" height="113" fill="#FFA806" fillOpacity={selectedId === "310" ? 0.6 : 0.25} onClick={() => onSelect('310')} />
    <rect id="308" x="2240" y="431" width="59" height="113" fill="#FFA806" fillOpacity={selectedId === "308" ? 0.6 : 0.25} onClick={() => onSelect('308')} />
    <rect id="306" x="2301" y="431" width="60" height="113" fill="#FFA806" fillOpacity={selectedId === "306" ? 0.6 : 0.25} onClick={() => onSelect('306')} />
    <rect id="304" x="2362" y="431" width="76" height="113" fill="#FFA806" fillOpacity={selectedId === "304" ? 0.6 : 0.25} onClick={() => onSelect('304')} />
    <rect id="315" x="2386" y="588" width="124" height="84" fill="#FFA806" fillOpacity={selectedId === "315" ? 0.6 : 0.25} onClick={() => onSelect('315')} />
    <rect id="317" x="2150" y="588" width="108" height="90" fill="#FFA806" fillOpacity={selectedId === "317" ? 0.6 : 0.25} onClick={() => onSelect('317')} />
    <rect id="327" x="1889" y="588" width="95" height="90" fill="#FFA806" fillOpacity={selectedId === "327" ? 0.6 : 0.25} onClick={() => onSelect('327')} />
    <path id="357" d="M1119.5 969L1228 909.5L1268 984.5L1169 1039.5L1119.5 969Z" fill="#4296E4" fillOpacity={selectedId === "357" ? 0.6 : 0.25} onClick={() => onSelect('357')} />
    <path id="359" d="M1027.5 1033L1117.5 971.5L1166.5 1040L1079.5 1098.5L1027.5 1033Z" fill="#4296E4" fillOpacity={selectedId === "359" ? 0.6 : 0.25} onClick={() => onSelect('359')} />
    <path id="361" d="M933.005 1112.1L1024.96 1035.18L1079 1099.5L988.5 1177.5L933.005 1112.1Z" fill="#4296E4" fillOpacity={selectedId === "361" ? 0.6 : 0.25} onClick={() => onSelect('361')} />
    </g>
  </svg>
);
};

export default Floor3;
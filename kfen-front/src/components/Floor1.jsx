const Floor1 = ({ selectedId ,onSelect }) => {
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
    <g id="1floor 1">
    <rect id="152" fillOpacity={selectedId === "152" ? 0.6 : 0.25} x="549" y="439" width="63" height="105" fill="#5EB92D" onClick={() => onSelect('152')} />
    <rect id="150" fillOpacity={selectedId === "150" ? 0.6 : 0.25} x="615" y="439" width="60" height="105" fill="#5EB92D" onClick={() => onSelect('150')} />
    <rect id="148" fillOpacity={selectedId === "148" ? 0.6 : 0.25} x="724" y="439" width="92" height="105" fill="#5EB92D" onClick={() => onSelect('148')} />
    <rect id="146" fillOpacity={selectedId === "146" ? 0.6 : 0.25} x="816" y="439" width="74" height="105" fill="#5EB92D" onClick={() => onSelect('146')} />
    <rect id="193" fillOpacity={selectedId === "193" ? 0.6 : 0.25} x="941" y="585" width="138" height="93" fill="#5EB92D" onClick={() => onSelect('193')} />
    <rect id="197" fillOpacity={selectedId === "197" ? 0.6 : 0.25} x="684" y="585" width="141" height="93" fill="#5EB92D" onClick={() => onSelect('197')} />
    <rect id="199" fillOpacity={selectedId === "199" ? 0.6 : 0.25} x="549" y="585" width="135" height="93" fill="#5EB92D" onClick={() => onSelect('199')} />
    <rect id="195" fillOpacity={selectedId === "195" ? 0.6 : 0.25} x="825" y="585" width="116" height="93" fill="#5EB92D" onClick={() => onSelect('195')} />
    <rect id="Вахта" fillOpacity={selectedId === "Вахта" ? 0.6 : 0.25} x="1173" y="676" width="127" height="93" fill="#4CE4E4" onClick={() => onSelect('Вахта')} />
    <rect id="144" fillOpacity={selectedId === "144" ? 0.6 : 0.25} x="890" y="439" width="60" height="105" fill="#5EB92D" onClick={() => onSelect('144')} />
    <rect id="142" fillOpacity={selectedId === "142" ? 0.6 : 0.25} x="951" y="439" width="61" height="105" fill="#5EB92D" onClick={() => onSelect('142')} />
    <rect id="140" fillOpacity={selectedId === "140" ? 0.6 : 0.25} x="1013" y="439" width="57" height="105" fill="#5EB92D" onClick={() => onSelect('140')} />
    <rect id="138" fillOpacity={selectedId === "138" ? 0.6 : 0.25} x="1073" y="439" width="56" height="105" fill="#5EB92D" onClick={() => onSelect('138')} />
    <rect id="F" fillOpacity={selectedId === "F" ? 0.6 : 0.25} x="1080" y="585" width="64" height="91" fill="white" onClick={() => onSelect('F')} />
    <rect id="M" fillOpacity={selectedId === "M" ? 0.6 : 0.25} x="1144" y="585" width="62" height="91" fill="white" onClick={() => onSelect('M')} />
    <rect id="M" fillOpacity={selectedId === "M" ? 0.6 : 0.25} x="1985" y="587" width="55" height="91" fill="white" onClick={() => onSelect('M')} />
    <rect id="F" fillOpacity={selectedId === "F" ? 0.6 : 0.25} x="2041" y="587" width="51" height="91" fill="white" onClick={() => onSelect('F')} />
    <rect id="Столовая" fillOpacity={selectedId === "Столовая" ? 0.6 : 0.25} x="1410" y="415" width="154" height="129" fill="#4CE4E4" onClick={() => onSelect('Столовая')} />
    <path id="Гардероб" fillOpacity={selectedId === "Гардероб" ? 0.6 : 0.25} d="M1079 676H1172V771V862H1123L1079 828.5V676Z" fill="#4CE4E4" onClick={() => onSelect('Гардероб')} />
    <rect id="Буфет" fillOpacity={selectedId === "Буфет" ? 0.6 : 0.25} x="1564" y="415" width="154" height="129" fill="#4CE4E4" onClick={() => onSelect('Буфет')} />
    <rect id="120" fillOpacity={selectedId === "120" ? 0.6 : 0.25} x="1926" y="431" width="50" height="114" fill="#FFA806" onClick={() => onSelect('120')} />
    <rect id="118" fillOpacity={selectedId === "118" ? 0.6 : 0.25} x="1976" y="431" width="55" height="114" fill="#FFA806" onClick={() => onSelect('118')} />
    <rect id="116" fillOpacity={selectedId === "116" ? 0.6 : 0.25} x="2031" y="431" width="69" height="114" fill="#FFA806" onClick={() => onSelect('116')} />
    <rect id="114" fillOpacity={selectedId === "114" ? 0.6 : 0.25} x="2100" y="431" width="71" height="114" fill="#FFA806" onClick={() => onSelect('114')} />
    <rect id="112" fillOpacity={selectedId === "112" ? 0.6 : 0.25} x="2171" y="431" width="66" height="114" fill="#FFA806" onClick={() => onSelect('112')} />
    <rect id="110" fillOpacity={selectedId === "110" ? 0.6 : 0.25} x="2237" y="431" width="53" height="114" fill="#FFA806" onClick={() => onSelect('110')} />
    <rect id="108" fillOpacity={selectedId === "108" ? 0.6 : 0.25} x="2290" y="431" width="63" height="114" fill="#FFA806" onClick={() => onSelect('108')} />
    <rect id="106" fillOpacity={selectedId === "106" ? 0.6 : 0.25} x="2354" y="431" width="64" height="114" fill="#FFA806" onClick={() => onSelect('106')} />
    <rect id="131" fillOpacity={selectedId === "131" ? 0.6 : 0.25} x="2371" y="588" width="72" height="84" fill="#FFA806" onClick={() => onSelect('131')} />
    <rect id="133" fillOpacity={selectedId === "133" ? 0.6 : 0.25} x="2278" y="588" width="93" height="90" fill="#FFA806" onClick={() => onSelect('133')} />
    <rect id="135" fillOpacity={selectedId === "135" ? 0.6 : 0.25} x="2175" y="588" width="101" height="90" fill="#FFA806" onClick={() => onSelect('135')} />
    <path id="161" fillOpacity={selectedId === "161" ? 0.6 : 0.25} d="M1701 790L1755 789L1750.66 882H1702.45L1701 790Z" fill="#484AED" onClick={() => onSelect('161')} />
    <path id="159" fillOpacity={selectedId === "159" ? 0.6 : 0.25} d="M1758 790L1828.5 792.5L1824 885.5L1753 882L1758 790Z" fill="#484AED" onClick={() => onSelect('159')} />
    <path id="157" fillOpacity={selectedId === "157" ? 0.6 : 0.25} d="M1829 792L1899 798.5L1892.71 895L1825 886L1829 792Z" fill="#5EB92D" onClick={() => onSelect('157')} />
    <path id="155" fillOpacity={selectedId === "155" ? 0.6 : 0.25} d="M1899 798.5L1966.5 808.5L1950 905L1894.5 895L1899 798.5Z" fill="#5EB92D" onClick={() => onSelect('155')} />
    <path id="153" fillOpacity={selectedId === "153" ? 0.6 : 0.25} d="M1966 808.5L2007 816.5L2042 827.5L2016.5 920.5L1949.5 904.5L1966 808.5Z" fill="#5EB92D" onClick={() => onSelect('153')} />
    <rect id="104" fillOpacity={selectedId === "104" ? 0.6 : 0.25} x="2418" y="431" width="53" height="114" fill="#FFA806" onClick={() => onSelect('104')} />
    </g>
  </svg>
);
};

export default Floor1;
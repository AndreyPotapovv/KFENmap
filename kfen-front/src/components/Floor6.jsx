const Floor6 = ({ selectedId ,onSelect }) => {
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
    <g id="6floor">
    <rect id="650" x="725" y="439" width="64" height="105" fill="#F42B19" fillOpacity={selectedId === "650" ? 0.6 : 0.25} onClick={() => onSelect('650')} />
    <rect id="648" x="789" y="439" width="77" height="105" fill="#F42B19" fillOpacity={selectedId === "648" ? 0.6 : 0.25} onClick={() => onSelect('648')} />
    <rect id="646" x="866" y="439" width="74" height="105" fill="#F42B19" fillOpacity={selectedId === "646" ? 0.6 : 0.25} onClick={() => onSelect('646')} />
    <rect id="644" x="940" y="439" width="80" height="105" fill="#F42B19" fillOpacity={selectedId === "644" ? 0.6 : 0.25} onClick={() => onSelect('644')} />
    <rect id="642" x="1021" y="439" width="84" height="105" fill="#5EB92D" fillOpacity={selectedId === "642" ? 0.6 : 0.25} onClick={() => onSelect('642')} />
    <rect id="632a" x="1285" y="463" width="57" height="81" fill="#424FE2" fillOpacity={selectedId === "632a" ? 0.6 : 0.25} onClick={() => onSelect('632a')} />
    <rect id="632" x="1342" y="417" width="108" height="127" fill="#424FE2" fillOpacity={selectedId === "632" ? 0.6 : 0.25} onClick={() => onSelect('632')} />
    <rect id="630" x="1453" y="417" width="101" height="127" fill="#5EB92D" fillOpacity={selectedId === "630" ? 0.6 : 0.25} onClick={() => onSelect('630')} />
    <rect id="628" x="1557" y="417" width="122" height="127" fill="#5EB92D" fillOpacity={selectedId === "628" ? 0.6 : 0.25} onClick={() => onSelect('628')} />
    <rect id="626" x="1679" y="417" width="124" height="127" fill="#5EB92D" fillOpacity={selectedId === "626" ? 0.6 : 0.25} onClick={() => onSelect('626')} />
    <rect id="622a" x="1806" y="464" width="75" height="80" fill="#F42B19" fillOpacity={selectedId === "622a" ? 0.6 : 0.25} onClick={() => onSelect('622a')} />
    <rect id="620" x="1928" y="431" width="56" height="113" fill="#F42B19" fillOpacity={selectedId === "620" ? 0.6 : 0.25} onClick={() => onSelect('620')} />
    <rect id="618" x="1985" y="431" width="58" height="113" fill="#F42B19" fillOpacity={selectedId === "618" ? 0.6 : 0.25} onClick={() => onSelect('618')} />
    <rect id="616" x="2043" y="431" width="59" height="113" fill="#F42B19" fillOpacity={selectedId === "616" ? 0.6 : 0.25} onClick={() => onSelect('616')} />
    <rect id="614" x="2103" y="431" width="60" height="113" fill="#F42B19" fillOpacity={selectedId === "614" ? 0.6 : 0.25} onClick={() => onSelect('614')} />
    <rect id="612" x="2163" y="431" width="63" height="113" fill="#F42B19" fillOpacity={selectedId === "612" ? 0.6 : 0.25} onClick={() => onSelect('612')} />
    <rect id="610" x="2227" y="431" width="63" height="113" fill="#F42B19" fillOpacity={selectedId === "610" ? 0.6 : 0.25} onClick={() => onSelect('610')} />
    <rect id="608" x="2291" y="431" width="68" height="113" fill="#F42B19" fillOpacity={selectedId === "608" ? 0.6 : 0.25} onClick={() => onSelect('608')} />
    <rect id="606" x="2359" y="431" width="59" height="113" fill="#F42B19" fillOpacity={selectedId === "606" ? 0.6 : 0.25} onClick={() => onSelect('606')} />
    <rect id="604" x="2418" y="431" width="53" height="113" fill="#F42B19" fillOpacity={selectedId === "604" ? 0.6 : 0.25} onClick={() => onSelect('604')} />
    <rect id="601" x="2455" y="587" width="56" height="84" fill="#F42B19" fillOpacity={selectedId === "601" ? 0.6 : 0.25} onClick={() => onSelect('601')} />
    <rect id="603" x="2387" y="588" width="68" height="83" fill="#F42B19" fillOpacity={selectedId === "603" ? 0.6 : 0.25} onClick={() => onSelect('603')} />
    <rect id="605" x="2323" y="587" width="63" height="90" fill="#F42B19" fillOpacity={selectedId === "605" ? 0.6 : 0.25} onClick={() => onSelect('605')} />
    <rect id="607" x="2258" y="587" width="63" height="90" fill="#F42B19" fillOpacity={selectedId === "607" ? 0.6 : 0.25} onClick={() => onSelect('607')} />
    <rect id="609" x="2193" y="587" width="63" height="90" fill="#F42B19" fillOpacity={selectedId === "609" ? 0.6 : 0.25} onClick={() => onSelect('609')} />
    <rect id="611" x="2143" y="587" width="50" height="90" fill="#F42B19" fillOpacity={selectedId === "611" ? 0.6 : 0.25} onClick={() => onSelect('611')} />
    <rect id="613" x="2093" y="587" width="50" height="90" fill="#F42B19" fillOpacity={selectedId === "613" ? 0.6 : 0.25} onClick={() => onSelect('613')} />
    <rect id="615" x="2043" y="587" width="50" height="90" fill="#F42B19" fillOpacity={selectedId === "615" ? 0.6 : 0.25} onClick={() => onSelect('615')} />
    <rect id="F" x="1985" y="587" width="58" height="90" fill="white" fillOpacity={selectedId === "F" ? 0.6 : 0.25} onClick={() => onSelect('F')} />
    <rect id="M" x="1934" y="587" width="51" height="90" fill="white" fillOpacity={selectedId === "M" ? 0.6 : 0.25} onClick={() => onSelect('M')} />
    <rect id="639" x="1003" y="585" width="75" height="90" fill="#5EB92D" fillOpacity={selectedId === "639" ? 0.6 : 0.25} onClick={() => onSelect('639')} />
    <rect id="F" x="1078" y="585" width="65" height="90" fill="white" fillOpacity={selectedId === "F" ? 0.6 : 0.25} onClick={() => onSelect('F')} />
    <rect id="M" x="1144" y="585" width="60" height="90" fill="white" fillOpacity={selectedId === "M" ? 0.6 : 0.25} onClick={() => onSelect('M')} />
    <rect id="641" x="928" y="585" width="75" height="90" fill="#5EB92D" fillOpacity={selectedId === "641" ? 0.6 : 0.25} onClick={() => onSelect('641')} />
    <rect id="643" x="856" y="585" width="69" height="90" fill="#F42B19" fillOpacity={selectedId === "643" ? 0.6 : 0.25} onClick={() => onSelect('643')} />
    <rect id="645" x="768" y="585" width="88" height="90" fill="#5EB92D" fillOpacity={selectedId === "645" ? 0.6 : 0.25} onClick={() => onSelect('645')} />
    <rect id="647" x="686" y="585" width="78" height="90" fill="#5EB92D" fillOpacity={selectedId === "647" ? 0.6 : 0.25} onClick={() => onSelect('647')} />
    <rect id="649" x="604" y="585" width="79" height="90" fill="#5EB92D" fillOpacity={selectedId === "649" ? 0.6 : 0.25} onClick={() => onSelect('649')} />
    </g>
    </svg>
);
};

export default Floor6;
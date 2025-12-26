export interface SEOLocation {
    city: string;
    slug: string;
    state: string;
    region: string;
    description: string;
    coordinates: { x: number; y: number };
    keyFocus: string;
    code: string;
    baseInfo: string;
    veteranPopulation: string;
    toxicExposureHistory: string;
    localResources: string[];
}

export interface SEOInitiative {
    title: string;
    slug: string;
    description: string;
    missionNarrative: string;
    impactNarrative: string;
    communityNarrative: string;
    actionNarrative: string;
    stages?: { icon: string; title: string; desc: string }[];
}

export type ComparisonCategory = 'Government' | 'Nonprofit' | 'Advocacy' | 'Healthcare';

export interface SEOComparison {
    resource: string;
    slug: string;
    category: ComparisonCategory;
    description: string;
    ieAdvantage: string;
}

export const LOCATIONS: SEOLocation[] = [
    {
        city: 'Las Vegas',
        slug: 'las-vegas',
        state: 'Nevada',
        region: 'Southwest',
        description: 'Home to the Nevada Test Site where over 900 nuclear tests were conducted. Thousands of atomic veterans served here and were exposed to radiation.',
        coordinates: { x: -115.1398, y: 36.1699 },
        keyFocus: 'Nuclear Testing',
        code: 'NTS',
        baseInfo: 'The Nevada Test and Training Range (NTTR) is one of the largest military training areas in the world. From 1951-1992, nuclear weapons were tested here.',
        veteranPopulation: 'Over 400,000 veterans in the Las Vegas metropolitan area, many with NTTR exposure history.',
        toxicExposureHistory: 'Atomic veterans exposed to nuclear fallout, radiation, and radioactive materials. Many developed cancers and other illnesses decades later.',
        localResources: ['VA Southern Nevada Healthcare System', 'Invisible Enemy Foundation'],
    },
    {
        city: 'San Diego',
        slug: 'san-diego',
        state: 'California',
        region: 'West Coast',
        description: 'Major naval hub where sailors were exposed to asbestos, jet fuels, and other toxic substances aboard ships and at bases.',
        coordinates: { x: -117.1611, y: 32.7157 },
        keyFocus: 'Naval Exposure',
        code: 'SDN',
        baseInfo: 'Naval Base San Diego is the largest naval base on the West Coast, home to aircraft carriers and submarines built with asbestos.',
        veteranPopulation: 'Over 230,000 veterans in San Diego County, the highest concentration per capita in the nation.',
        toxicExposureHistory: 'Decades of exposure to asbestos in ship hulls, JP-8 jet fuel, solvents, and heavy metals used in naval operations.',
        localResources: ['VA San Diego Healthcare System', 'Veterans Village of San Diego'],
    },
    {
        city: 'Camp Lejeune',
        slug: 'camp-lejeune',
        state: 'North Carolina',
        region: 'East Coast',
        description: 'Site of one of the most significant toxic water contamination incidents in U.S. military history, affecting over 1 million service members.',
        coordinates: { x: -77.4044, y: 34.6726 },
        keyFocus: 'Water Contamination',
        code: 'CLJ',
        baseInfo: 'From 1953-1987, drinking water at Camp Lejeune was contaminated with industrial solvents, benzene, and other carcinogens.',
        veteranPopulation: 'An estimated 1 million Marines and their families were exposed to contaminated water over 34 years.',
        toxicExposureHistory: 'Trichloroethylene (TCE), perchloroethylene (PCE), benzene, and vinyl chloride contaminated the base water supply.',
        localResources: ['Camp Lejeune Healthcare', 'PACT Act Claims Centers'],
    },
    {
        city: 'Fayetteville',
        slug: 'fayetteville',
        state: 'North Carolina',
        region: 'East Coast',
        description: 'Adjacent to Fort Bragg (now Fort Liberty), where soldiers were exposed to Agent Orange defoliants and burn pit emissions.',
        coordinates: { x: -78.8784, y: 35.0527 },
        keyFocus: 'Airborne Hazards',
        code: 'FBG',
        baseInfo: 'Fort Liberty is the largest military installation by population in the U.S., training Special Forces and airborne units.',
        veteranPopulation: 'Over 75,000 veterans in Cumberland County, many with deployment exposure histories.',
        toxicExposureHistory: 'Burn pit exposure during deployments, training with chemical agents, and Agent Orange testing programs.',
        localResources: ['Womack Army Medical Center', 'Veterans Affairs of Fayetteville'],
    },
    {
        city: 'Joint Base Lewis-McChord',
        slug: 'joint-base-lewis-mcchord',
        state: 'Washington',
        region: 'Pacific Northwest',
        description: 'Major Army and Air Force installation with documented PFAS contamination in groundwater and soil.',
        coordinates: { x: -122.5833, y: 47.1167 },
        keyFocus: 'PFAS Contamination',
        code: 'JBL',
        baseInfo: 'One of the largest military bases in the Western U.S., home to I Corps and multiple Air Force units.',
        veteranPopulation: 'Over 100,000 veterans in Pierce County with ties to the installation.',
        toxicExposureHistory: 'PFAS "forever chemicals" from firefighting foam have contaminated groundwater used by base personnel and surrounding communities.',
        localResources: ['Madigan Army Medical Center', 'Puget Sound VA Healthcare'],
    },
    {
        city: 'Killeen',
        slug: 'killeen',
        state: 'Texas',
        region: 'Central',
        description: 'Home to Fort Hood (now Fort Cavazos), where soldiers faced burn pit exposure during deployments and training accidents.',
        coordinates: { x: -97.7278, y: 31.1171 },
        keyFocus: 'Deployment Exposure',
        code: 'FHD',
        baseInfo: 'Fort Cavazos is the largest active-duty armored post in U.S. Armed Forces, deploying units to Iraq and Afghanistan.',
        veteranPopulation: 'Over 50,000 veterans in Bell County, the majority with combat deployment histories.',
        toxicExposureHistory: 'Extensive burn pit exposure during Iraq and Afghanistan deployments, training with depleted uranium munitions.',
        localResources: ['Carl R. Darnall Army Medical Center', 'Central Texas Veterans Health Care'],
    },
    {
        city: 'Norfolk',
        slug: 'norfolk',
        state: 'Virginia',
        region: 'East Coast',
        description: 'Home to the largest naval base in the world, where shipyard workers and sailors faced asbestos and chemical exposure.',
        coordinates: { x: -76.2859, y: 36.8508 },
        keyFocus: 'Shipyard Hazards',
        code: 'NFK',
        baseInfo: 'Naval Station Norfolk is the world\'s largest naval base, supporting the Atlantic Fleet.',
        veteranPopulation: 'Over 100,000 veterans in the Hampton Roads area.',
        toxicExposureHistory: 'Shipyard workers exposed to asbestos, lead paint, PCBs, and industrial solvents during ship maintenance.',
        localResources: ['Hampton VA Medical Center', 'Navy Safe Harbor'],
    },
    {
        city: 'Honolulu',
        slug: 'honolulu',
        state: 'Hawaii',
        region: 'Pacific',
        description: 'Site of the Red Hill fuel storage facility leak that contaminated drinking water for thousands of military families.',
        coordinates: { x: -157.8583, y: 21.3069 },
        keyFocus: 'Fuel Contamination',
        code: 'HNL',
        baseInfo: 'Pearl Harbor-Hickam hosts Pacific Fleet headquarters and the Red Hill Underground Fuel Storage Facility.',
        veteranPopulation: 'Over 100,000 veterans in Hawaii, many stationed at Pacific installations.',
        toxicExposureHistory: 'The 2021 Red Hill fuel leak contaminated drinking water with jet fuel, affecting over 93,000 people.',
        localResources: ['Tripler Army Medical Center', 'Pacific Islands VA Healthcare'],
    },
];

export const INITIATIVES: SEOInitiative[] = [
    {
        title: 'NTTR Veterans Advocacy',
        slug: 'nttr-advocacy',
        description: 'Fighting for recognition and compensation for atomic veterans exposed to radiation at the Nevada Test Site.',
        missionNarrative: 'Atomic veterans were ordered to participate in nuclear tests with minimal protection. Decades later, many suffer from cancers and diseases that the government has been slow to acknowledge.',
        impactNarrative: 'Through legislative advocacy and public awareness campaigns, we push for expanded PACT Act coverage and presumptive service connections for radiation-related illnesses.',
        communityNarrative: 'Our DAO enables atomic veteran families to vote on advocacy priorities, ensuring that the community\'s voice drives our mission.',
        actionNarrative: 'Every NFT purchase funds direct advocacy: lobbying efforts, veteran testimony programs, and legal support for disability claims.',
        stages: [
            { icon: '☢️', title: 'Document', desc: 'Gather exposure records' },
            { icon: '📢', title: 'Advocate', desc: 'Congressional outreach' },
            { icon: '⚖️', title: 'Litigate', desc: 'Legal representation' },
            { icon: '💰', title: 'Compensate', desc: 'Claim support' },
        ],
    },
    {
        title: 'Burn Pit Awareness',
        slug: 'burn-pit-awareness',
        description: 'Educating the public and policymakers about the devastating health effects of open-air burn pits in Iraq and Afghanistan.',
        missionNarrative: 'For over two decades, military burn pits exposed service members to toxic smoke from burning trash, medical waste, and hazardous materials.',
        impactNarrative: 'The PACT Act of 2022 was a major victory, but many veterans still face bureaucratic hurdles. We fight to ensure no veteran is left behind.',
        communityNarrative: 'Holders can submit stories of burn pit exposure to our archive, creating an immutable record of sacrifice for future generations.',
        actionNarrative: '10% of collection revenue is donated to organizations providing direct medical care to burn pit-affected veterans.',
        stages: [
            { icon: '🔥', title: 'Expose', desc: 'Document burn pit sites' },
            { icon: '🩺', title: 'Diagnose', desc: 'Connect to healthcare' },
            { icon: '📋', title: 'File', desc: 'Claims assistance' },
            { icon: '🏆', title: 'Win', desc: 'Secure benefits' },
        ],
    },
    {
        title: 'Camp Lejeune Justice',
        slug: 'camp-lejeune-justice',
        description: 'Supporting victims of the Camp Lejeune water contamination crisis in their fight for justice and compensation.',
        missionNarrative: 'The Camp Lejeune Justice Act opened the door for victims to sue the government. We ensure affected veterans and families have access to legal resources.',
        impactNarrative: 'Over 1 million people were exposed. Many have developed cancers, birth defects, and other serious conditions. We fight for their right to compensation.',
        communityNarrative: 'Our community includes Camp Lejeune survivors and their advocates, united in seeking accountability.',
        actionNarrative: 'We partner with veterans\' legal aid organizations to provide free claim consultations for Camp Lejeune victims.',
        stages: [
            { icon: '💧', title: 'Verify', desc: 'Confirm exposure period' },
            { icon: '📁', title: 'Document', desc: 'Gather medical records' },
            { icon: '🏛️', title: 'File', desc: 'Submit CLJA claim' },
            { icon: '✅', title: 'Resolve', desc: 'Obtain justice' },
        ],
    },
    {
        title: 'PFAS Awareness Campaign',
        slug: 'pfas-awareness',
        description: 'Raising awareness about "forever chemicals" contaminating military bases and surrounding communities.',
        missionNarrative: 'PFAS chemicals used in firefighting foam have contaminated groundwater at hundreds of military installations worldwide.',
        impactNarrative: 'These chemicals never break down and accumulate in the body, causing cancers, immune dysfunction, and developmental issues.',
        communityNarrative: 'We map affected bases and connect impacted veterans with testing resources and advocacy groups.',
        actionNarrative: 'Our initiative pushed for PFAS blood testing to be included in VA health screenings for at-risk veterans.',
        stages: [
            { icon: '🧪', title: 'Test', desc: 'Blood screening' },
            { icon: '🗺️', title: 'Map', desc: 'Identify hotspots' },
            { icon: '📣', title: 'Amplify', desc: 'Media outreach' },
            { icon: '🛡️', title: 'Protect', desc: 'Policy change' },
        ],
    },
    {
        title: 'Agent Orange Legacy',
        slug: 'agent-orange-legacy',
        description: 'Continuing the fight for Vietnam veterans and their descendants affected by Agent Orange exposure.',
        missionNarrative: 'Agent Orange defoliant sprayed during the Vietnam War has caused cancer, diabetes, and birth defects in multiple generations.',
        impactNarrative: 'While some conditions are now presumptive, many veterans still struggle to prove service connection. We advocate for expanded coverage.',
        communityNarrative: 'Our initiative connects Vietnam veterans with younger advocates who carry the torch forward.',
        actionNarrative: 'We fund research into intergenerational effects of Agent Orange and support descendants seeking recognition.',
        stages: [
            { icon: '🍃', title: 'Identify', desc: 'Exposure verification' },
            { icon: '🧬', title: 'Research', desc: 'Generational studies' },
            { icon: '📜', title: 'Legislate', desc: 'Expand presumptives' },
            { icon: '❤️', title: 'Support', desc: 'Family care' },
        ],
    },
    {
        title: 'Veterans Suicide Prevention',
        slug: 'suicide-prevention',
        description: '22 veterans die by suicide every day. We fight to end this crisis through peer support, mental health advocacy, and crisis intervention resources.',
        missionNarrative: 'The veteran suicide epidemic is a national emergency. Behind every statistic is a life, a family, and a community left devastated. We believe that those who served deserve every resource needed to fight this invisible enemy.',
        impactNarrative: 'Through partnerships with crisis intervention programs and peer support networks, we connect at-risk veterans with immediate help. Our blockchain-based approach ensures transparent funding reaches proven suicide prevention programs.',
        communityNarrative: 'Our community creates a judgment-free space where veterans can connect with peers who understand their struggles. NFT holders vote on funding allocations to suicide prevention organizations and research initiatives.',
        actionNarrative: 'Every NFT purchase funds 24/7 veteran crisis hotlines, peer mentorship programs, and mental health awareness campaigns. If you or a veteran you know is in crisis, call the Veterans Crisis Line: 988 then press 1.',
        stages: [
            { icon: '📞', title: 'Connect', desc: 'Crisis hotline access' },
            { icon: '🤝', title: 'Support', desc: 'Peer mentorship' },
            { icon: '💚', title: 'Heal', desc: 'Mental health care' },
            { icon: '🛡️', title: 'Prevent', desc: 'Long-term solutions' },
        ],
    },
    {
        title: 'Veteran Entrepreneur Fund',
        slug: 'veteran-shark-tank',
        description: 'The Veterans Shark Tank initiative provides seed funding for veteran-owned businesses.',
        missionNarrative: '5% of all Invisible Enemies revenue is allocated to funding veteran entrepreneurs who pitch their business ideas to the community.',
        impactNarrative: 'Veterans face unique challenges transitioning to civilian careers. We empower them to become job creators, not just job seekers.',
        communityNarrative: 'NFT holders vote on which veteran-owned businesses receive funding each quarter through our DAO governance.',
        actionNarrative: 'Successful businesses create ripple effects: employing other veterans, contributing to their communities, and proving that service doesn\'t end with discharge.',
        stages: [
            { icon: '💡', title: 'Pitch', desc: 'Submit business plan' },
            { icon: '🗳️', title: 'Vote', desc: 'DAO selects winners' },
            { icon: '💵', title: 'Fund', desc: 'Seed capital awarded' },
            { icon: '🚀', title: 'Launch', desc: 'Business support' },
        ],
    },
];

export const COMPARISONS: SEOComparison[] = [
    {
        resource: 'VA Healthcare',
        slug: 'va-healthcare',
        category: 'Government',
        description: 'The Veterans Health Administration provides healthcare services to enrolled veterans through VA medical centers and clinics.',
        ieAdvantage: 'While VA provides essential healthcare, bureaucratic delays leave many veterans waiting months for care. Invisible Enemies funds direct advocacy to expedite claims and connects veterans with legal resources when the system fails them.',
    },
    {
        resource: 'PACT Act',
        slug: 'pact-act',
        category: 'Government',
        description: 'The PACT Act expanded VA healthcare and benefits for veterans exposed to burn pits, Agent Orange, and other toxic substances.',
        ieAdvantage: 'The PACT Act was a legislative victory, but implementation gaps remain. Invisible Enemies educates veterans on their new rights and funds claim support to ensure no veteran is left behind in the paperwork.',
    },
    {
        resource: 'Disabled American Veterans (DAV)',
        slug: 'dav',
        category: 'Nonprofit',
        description: 'DAV provides free assistance to veterans filing disability claims and advocates for veteran legislation.',
        ieAdvantage: 'DAV does critical work. Invisible Enemies complements their mission by focusing specifically on toxic exposure cases and using blockchain transparency to ensure 100% of donated funds reach advocacy programs.',
    },
    {
        resource: 'Wounded Warrior Project',
        slug: 'wounded-warrior-project',
        category: 'Nonprofit',
        description: 'WWP provides programs for wounded veterans including mental health support, career counseling, and physical wellness.',
        ieAdvantage: 'While WWP focuses on physical and mental wounds, Invisible Enemies targets the "invisible" wounds—toxic exposure that manifests as cancer and chronic illness years after service.',
    },
    {
        resource: 'The Invisible Enemy Foundation',
        slug: 'invisible-enemy-foundation',
        category: 'Nonprofit',
        description: 'A 501(c)(3) charitable organization focused on NTTR veterans exposed to radiation and toxic materials.',
        ieAdvantage: 'Invisible Enemies NFT is the decentralized funding arm of this mission. Through blockchain-based governance, NFT holders directly vote on how funds are allocated, creating an unprecedented model of transparent charitable giving.',
    },
    {
        resource: 'Burn Pits 360',
        slug: 'burn-pits-360',
        category: 'Advocacy',
        description: 'A nonprofit organization dedicated to supporting veterans suffering from toxic exposure from burn pits.',
        ieAdvantage: 'Burn Pits 360 led the advocacy that passed the PACT Act. Invisible Enemies amplifies this work through our decentralized community, creating a permanent, immutable record of veteran testimonies on-chain.',
    },
    {
        resource: 'Veterans of Foreign Wars (VFW)',
        slug: 'vfw',
        category: 'Nonprofit',
        description: 'One of the oldest veteran service organizations providing camaraderie, advocacy, and benefits assistance.',
        ieAdvantage: 'VFW\'s strength is community. Invisible Enemies adds technological innovation—using NFTs to create a global, digital-first veteran community that transcends geographic boundaries.',
    },
    {
        resource: 'Cohen Veterans Network',
        slug: 'cohen-veterans-network',
        category: 'Healthcare',
        description: 'Provides mental health services to veterans and military families at no cost.',
        ieAdvantage: 'Mental health is critical. Invisible Enemies addresses the physical health crisis of toxic exposure, creating a complementary resource that addresses the full spectrum of veteran needs.',
    },
];

const TIMEZONES = [
  "(UTC-08:00) Pacific Time (US & Canada)",
  "(UTC-07:00) Mountain Time (US & Canada)",
  "(UTC-06:00) Central Time (US & Canada)",
  "(UTC-05:00) Eastern Time (US & Canada)",
  "(UTC+00:00) UTC",
];

const EXAMPLE_LAYOUT_REV = 3;

const DEMO_FLOORS = [
  {
    id: "f1",
    name: "1st floor",
    plan: "assets/floorplan-1.png",
    rooms: [
      { name: "Foyer" },
      { name: "Living Room", photo: "assets/room-living.png" },
      { name: "Kitchen" },
      { name: "Dining" },
      { name: "Primary Bedroom" },
      { name: "Primary Bath" },
      { name: "Office" },
      { name: "Tech Closet", photo: "assets/step-ethernet.png" },
    ],
  },
  {
    id: "f2",
    name: "2nd floor",
    plan: "assets/floorplan-2.png",
    rooms: [
      { name: "Guest Bedroom" },
      { name: "Kids Bedroom" },
      { name: "Loft" },
      { name: "Hall Bath" },
      { name: "Laundry" },
      { name: "Media Room" },
    ],
  },
  {
    id: "f3",
    name: "Lower level",
    plan: "assets/floorplan-1.png",
    rooms: [
      { name: "Gym" },
      { name: "Wine cellar" },
      { name: "Guest suite" },
      { name: "Utility" },
    ],
  },
  {
    id: "f4",
    name: "Outside",
    plan: "assets/floorplan-2.png",
    rooms: [
      { name: "Front yard" },
      { name: "Backyard" },
      { name: "Pool" },
      { name: "Patio" },
      { name: "Garage" },
    ],
  },
];

const DEVICE_GROUPS = {
  light: "Lights",
  audio: "Audio",
  mic: "Audio",
  camera: "Cameras",
  shade: "Shades",
  fan: "Fans",
  climate: "Thermostats",
  remote: "Jemm devices",
  arc: "Jemm devices",
};

const DEVICE_GROUP_ORDER = ["Lights", "Audio", "Cameras", "Shades", "Fans", "Thermostats", "Jemm devices"];
const DEVICE_KINDS = ["light", "audio", "camera", "shade", "fan", "climate", "mic", "remote", "arc"];

const SHEET_FIELDS = [
  "name", "on", "intensity", "room", "kelvin", "fade",
  "volume", "muted", "source", "hvacMode", "fan", "targetTemp", "shadePos",
];

const COLOR_TEMPS = [
  { k: 2700, label: "2700K", swatch: "#ffb56a" },
  { k: 3000, label: "3000K", swatch: "#ffc48a" },
  { k: 4000, label: "4000K", swatch: "#fff1d4" },
  { k: 5000, label: "5000K", swatch: "#f3f6ff" },
  { k: 6500, label: "6500K", swatch: "#d7e7ff" },
];

const AUDIO_SOURCES = ["Sonos Port", "AirPlay 2", "Auxiliary", "Bluetooth"];
const FADE_RATES = [
  { value: "instant", label: "Instant" },
  { value: "0.5s", label: "0.5s" },
  { value: "1s", label: "1s" },
  { value: "2s", label: "2s" },
  { value: "5s", label: "5s" },
];
const HVAC_MODES = ["off", "heat", "cool", "auto"];
const FAN_SPEEDS = ["auto", "low", "med", "high"];

const SCENE_PHOTO = "assets/scenes/thumb.png";

const DEMO_SCENES_HOME = [
  {
    id: "sc-default",
    name: "Default",
    photo: SCENE_PHOTO,
    on: true,
    lights: [
      { name: "Foyer pendant", room: "Foyer", level: "80%" },
      { name: "Kitchen island", room: "Kitchen", level: "70%" },
      { name: "Living Room", room: "Living Room", level: "60%" },
    ],
    audio: [{ name: "Sonos 1", room: "Living Room", detail: "Off" }],
    doors: [
      { name: "Front door", locked: false },
      { name: "Patio", locked: false },
    ],
  },
  {
    id: "sc-away",
    name: "Away",
    photo: SCENE_PHOTO,
    on: false,
    lights: [{ name: "All lights", room: "Whole home", level: "Off" }],
    audio: [{ name: "All speakers", room: "Whole home", detail: "Off" }],
    doors: [
      { name: "Front door", locked: true },
      { name: "Patio", locked: true },
    ],
  },
  {
    id: "sc-clean",
    name: "Cleaning",
    photo: SCENE_PHOTO,
    on: false,
    lights: [{ name: "All lights", room: "Whole home", level: "100%" }],
    audio: [{ name: "All speakers", room: "Whole home", detail: "Off" }],
    doors: [
      { name: "Front door", locked: false },
      { name: "Patio", locked: false },
    ],
  },
  {
    id: "sc-movie",
    name: "Movie night",
    photo: SCENE_PHOTO,
    on: false,
    lights: [
      { name: "Lutron light", room: "Living Room", level: "20%" },
      { name: "Kitchen island", room: "Kitchen", level: "Off" },
    ],
    audio: [{ name: "Sonos 1", room: "Living Room", detail: "35% · TV" }],
    doors: [{ name: "Front door", locked: true }],
  },
  {
    id: "sc-mom",
    name: "Mom’s not home",
    photo: SCENE_PHOTO,
    on: false,
    lights: [
      { name: "Kitchen island", room: "Kitchen", level: "40%" },
      { name: "Living Room", room: "Living Room", level: "Off" },
    ],
    audio: [{ name: "Sonos 1", room: "Living Room", detail: "Off" }],
    doors: [
      { name: "Front door", locked: true },
      { name: "Patio", locked: true },
    ],
    cameras: [
      { name: "Google cam 1", room: "Living Room", detail: "On" },
      { name: "West cam 2", room: "Living Room", detail: "On" },
    ],
  },
];

const DEMO_SCENES_OFFICE = [
  {
    id: "sc-open",
    name: "Workday",
    photo: SCENE_PHOTO,
    on: true,
    lights: [
      { name: "Lobby light", room: "Lobby", level: "80%" },
      { name: "Open office light", room: "Open office", level: "64%" },
    ],
    audio: [{ name: "Conference speakers", room: "Conference A", detail: "32%" }],
    doors: [{ name: "Lobby entry", locked: false }],
  },
  {
    id: "sc-meet",
    name: "All-hands",
    photo: SCENE_PHOTO,
    on: false,
    lights: [
      { name: "Conference A", room: "Conference A", level: "70%" },
      { name: "Lobby light", room: "Lobby", level: "50%" },
    ],
    audio: [{ name: "Conference speakers", room: "Conference A", detail: "55%" }],
    doors: [{ name: "Lobby entry", locked: false }],
  },
  {
    id: "sc-close",
    name: "After hours",
    photo: SCENE_PHOTO,
    on: false,
    lights: [{ name: "All lights", room: "All floors", level: "10%" }],
    audio: [{ name: "All speakers", room: "All floors", detail: "Off" }],
    doors: [
      { name: "Lobby entry", locked: true },
      { name: "Loading dock", locked: true },
    ],
  },
  {
    id: "sc-clean-office",
    name: "Cleaning",
    photo: SCENE_PHOTO,
    on: false,
    lights: [{ name: "All lights", room: "All floors", level: "100%" }],
    audio: [{ name: "All speakers", room: "All floors", detail: "Off" }],
    doors: [{ name: "Lobby entry", locked: false }],
  },
];

function propertyScenes() {
  const office = (state.reviewing || isOnboarding() || state.addingProperty)
    ? state.property.type === "commercial"
    : currentMode().id === "office";
  return office ? DEMO_SCENES_OFFICE : DEMO_SCENES_HOME;
}

function findScene(id) {
  return propertyScenes().find((s) => s.id === id) || null;
}

const SUGGESTED_ROOMS = {
  residential: ["Living Room", "Kitchen", "Primary Bedroom", "Bath", "Foyer"],
  commercial: ["Lobby", "Open office", "Conference A", "Break room", "IT closet"],
};

const COACH_STEPS = ["upload", "suggest", "add-floors", "add-rooms", "floorplan", "add-device", "sync", "drag", "scenes"];
const COACH = {
  upload: {
    title: "Start with Floorplans",
    text: "Upload floorplans of the property to save time setting up floors and rooms. You can use .CAD, .PDF or similar formats.",
    cta: "Next",
    strip: "Hey, Jemm here. First, upload a floorplan — CAD becomes a 3D model, photos stay flat.",
  },
  suggest: {
    title: "Suggested rooms",
    text: "I suggested rooms from this layout. Tap one to add it — the Jemm mark means I recommended it.",
    cta: "Next",
    strip: "Hey, Jemm here. These are suggested rooms based on the property type. Add the ones you want.",
  },
  "add-floors": {
    title: "Add Floors",
    text: "Click the “+” option to add a floor. Use this when the property has more than one level.",
    cta: "Next",
    strip: "Hey, Jemm here. Add another floor with the + next to Floors.",
  },
  "add-rooms": {
    title: "Add Rooms",
    text: "Add rooms one by one with this +. Name each space so devices have a home.",
    cta: "Next",
    strip: "Hey, Jemm here. Add any extra rooms one at a time. You can rename them anytime.",
  },
  floorplan: {
    title: "Viewing floorplans",
    text: "CAD files become a 3D model. Image floorplans stay flat. No devices yet — we’ll add those next.",
    cta: "Next",
    strip: "Hey, Jemm here. This is the layout. Devices show up after you add them.",
  },
  "add-device": {
    title: "Manually add devices",
    text: "Use this button to manually add a device, and select the floor, and room. You’ll be able to move them between rooms later.",
    cta: "Next",
    strip: "Hey, Jemm here. Press + to add a device, or scan the network with Arc.",
  },
  sync: {
    title: "Scan devices from the network",
    text: "Now that Jemm Arc is connected, try syncing all existing devices. You can edit them manually as well.",
    cta: "Scan now",
    modalTitle: "Devices added to each room/floor",
    modalText: "You’ll see this popup every time you sync devices to the network. This will add or remove devices depending on their current connection to the network.",
    strip: "Hey, Jemm here. Press Scan with Jemm Arc to sync devices from the network.",
  },
  drag: {
    title: "Move devices",
    text: "Drag a device onto another room to move it. Drop targets light up green — that’s how you reassign across rooms.",
    cta: "Next",
    strip: "Hey, Jemm here. Drag devices onto a room to move them. The room will highlight when you can drop.",
  },
  scenes: {
    title: "Scenes",
    text: "Scenes sit above the rooms. Tap one to see lights, audio, and door locks, then run it.",
    cta: "Done",
    strip: "Hey, Jemm here. Scenes are up top — tap one for a summary, then run it when you’re ready.",
  },
};

function suggestedRoomsForProperty(p = state.property) {
  return (p.type === "commercial" ? SUGGESTED_ROOMS.commercial : SUGGESTED_ROOMS.residential).slice();
}

function existingRoomNames(floors = state.floors) {
  return (floors || []).flatMap((f) => (f.rooms || []).map(roomName));
}

function pendingSuggestions() {
  const have = new Set(existingRoomNames().map((n) => n.toLowerCase()));
  const listed = state.suggestions && state.suggestions.length
    ? state.suggestions
    : suggestedRoomsForProperty();
  return listed.filter((n) => !have.has(n.toLowerCase()));
}

function roomsGuiding() {
  return state.screen === "rooms"
    && !state.reviewing
    && (isOnboarding() || state.addingProperty)
    && state.coach
    && state.coach !== "done";
}

function isCadFile(name) {
  return /\.(dwg|dxf|ifc|rvt|pdf)$/i.test(name || "");
}

function isPlanImage(name) {
  return /\.(png|jpe?g|webp|gif)$/i.test(name || "");
}

function propertyCover(p = state.property) {
  return (p && p.cover) || "";
}

function currentPropertyRecord() {
  const name = state.property?.name;
  if (!name) return null;
  return liveProperties().find((p) => (p.details?.name || p.name) === name) || null;
}

function setPropertyCover(cover) {
  const property = { ...state.property, cover: cover || "" };
  const rec = currentPropertyRecord();
  const properties = liveProperties().map((p) => {
    const match = rec ? String(p.id) === String(rec.id) : !!(property.name && (p.details?.name || p.name) === property.name);
    if (!match) return p;
    return { ...p, details: { ...(p.details || {}), cover: cover || "" } };
  });
  setState({ property, properties });
  if (state.loggedIn) persistSession();
}

function typePickHtml(p, action) {
  const type = p.type === "commercial" ? "commercial" : "residential";
  return `
    <div class="type-pick" role="radiogroup" aria-label="Property type">
      <button type="button" role="radio" class="type-opt ${type === "residential" ? "is-on" : ""}" data-action="${action}" data-value="residential" aria-checked="${type === "residential"}">
        <img src="assets/ill-house.svg" alt="" />
        <span class="radio" aria-hidden="true"><i></i></span>
        <span>Residential</span>
      </button>
      <button type="button" role="radio" class="type-opt ${type === "commercial" ? "is-on" : ""}" data-action="${action}" data-value="commercial" aria-checked="${type === "commercial"}">
        <img src="assets/ill-office.svg" alt="" />
        <span class="radio" aria-hidden="true"><i></i></span>
        <span>Commercial</span>
      </button>
    </div>`;
}

function applyPropertyType(value) {
  const type = value === "commercial" ? "commercial" : "residential";
  const portalMode = type === "commercial" ? "office" : "residential";
  persistMode(portalMode);
  setState({
    property: { ...state.property, type },
    portalMode,
  });
}

function iconForKind(kind) {
  if (kind === "arc") return "assets/icon-arc.svg";
  if (kind === "mic") return "assets/devices/hero-mic.svg";
  if (kind === "remote") return "assets/devices/hero-remote.png";
  if (kind === "light") return "assets/devices/icon-light.svg";
  if (kind === "audio") return "assets/devices/icon-audio.svg";
  if (kind === "camera") return "assets/devices/icon-camera.svg";
  if (kind === "shade") return "assets/devices/icon-shade.svg";
  if (kind === "fan") return "assets/devices/icon-fan.svg";
  if (kind === "climate" || kind === "hvac") return "assets/devices/icon-climate.svg";
  return "assets/ill-empty.png";
}

function heroIconFor(d) {
  if (!d) return iconForKind("light");
  if (d.kind === "arc") return "assets/devices/hero-arc.svg";
  if (d.kind === "mic") return "assets/devices/hero-mic.svg";
  if (d.kind === "remote") return "assets/devices/hero-remote.png";
  return iconForKind(d.kind);
}

function deviceIcon(d) {
  const kind = d && d.kind;
  if (kind && iconForKind(kind) !== "assets/ill-empty.png") return iconForKind(kind);
  if (d && d.icon && !/ill-empty/.test(d.icon)) return d.icon;
  return "assets/ill-empty.png";
}

function kindIconHtml(src, extra = "") {
  return `<span class="device-kind-icon${extra ? ` ${extra}` : ""}"><img src="${esc(src)}" alt="" /></span>`;
}

function isGlyphKind(kind) {
  return kind !== "arc" && kind !== "mic" && kind !== "remote";
}

function kindLabel(kind) {
  if (kind === "mic") return "Jemm Mic";
  if (kind === "remote") return "Jemm Remote";
  if (kind === "arc") return "Jemm Arc";
  if (kind === "camera") return "Camera";
  if (kind === "fan") return "Fan";
  return DEVICE_GROUPS[kind] || kind;
}

function isJemmDevice(d) {
  return !!d && (d.kind === "arc" || d.kind === "mic" || d.kind === "remote");
}

function demoDevice(id, name, kind, room, extra = {}) {
  return {
    id,
    netId: extra.netId || id,
    name,
    kind,
    room,
    on: extra.on !== false,
    intensity: extra.intensity ?? (kind === "climate" ? 72 : kind === "audio" ? 36 : 70),
    diagnostic: extra.diagnostic || "Healthy",
    firmware: extra.firmware || "1.0.0",
    size: extra.size || "—",
    weight: extra.weight || "—",
    ...extra,
  };
}

function seedDevices(src) {
  return cloneDevices((src || []).filter((d) => d.seed !== false));
}

function deviceNetId(d) {
  return d?.netId || d?.id || `${d?.kind || "device"}:${d?.name || ""}:${d?.room || ""}`;
}

function devicesForLayout() {
  const rooms = existingRoomNames();
  return networkActiveDevices().map((d, i) => ({
    ...d,
    id: `d-${Date.now()}-${i}`,
    room: rooms.includes(d.room) ? d.room : (rooms[i % Math.max(rooms.length, 1)] || d.room),
  }));
}

const DEMO_DEVICES = [
  demoDevice("d1", "Jemm Arc", "arc", "Tech Closet", { intensity: 100, firmware: "2.4.1", size: "8” (D) x 6” (H)", weight: "4.2lbs", hwId: "ID74167", manufacturer: "Jemm Tec, LLC" }),
  demoDevice("d8", "Foyer thermostat", "climate", "Foyer", { intensity: 68, targetTemp: 68, diagnostic: "Error", firmware: "4.0.2", size: "4” x 4”", weight: "0.8lbs" }),
  demoDevice("d18", "Foyer pendant", "light", "Foyer", { intensity: 80, kelvin: 2700 }),
  demoDevice("d5", "Lutron light", "light", "Living Room", { intensity: 72, kelvin: 3000, firmware: "3.1.0" }),
  demoDevice("d9", "Sonos 1", "audio", "Living Room", { intensity: 38, volume: 38, firmware: "15.9", source: "Sonos Port" }),
  demoDevice("d2", "Jemm Mic", "mic", "Living Room", { on: false, intensity: 80, firmware: "1.8.0", size: "2” (D) x 3” (H)", weight: "0.4lbs" }),
  demoDevice("d12", "Living cam", "camera", "Living Room", { firmware: "1.4.2" }),
  demoDevice("d7", "Living shade", "shade", "Living Room", { intensity: 80, shadePos: 80 }),
  demoDevice("d16", "Living fan", "fan", "Living Room", { intensity: 40, fan: "med" }),
  demoDevice("d13", "West cam 2", "camera", "Living Room", { on: false, offline: true, firmware: "1.1.0" }),
  demoDevice("d19", "Kitchen island", "light", "Kitchen", { intensity: 70, kelvin: 3000 }),
  demoDevice("d20", "Kitchen speakers", "audio", "Kitchen", { intensity: 28, volume: 28 }),
  demoDevice("d21", "Dining pendant", "light", "Dining", { intensity: 64, kelvin: 2700 }),
  demoDevice("d4", "Jemm Remote", "remote", "Primary Bedroom", { intensity: 50, firmware: "1.2.3", size: "5” (W) x 2” (H)", weight: "0.6lbs" }),
  demoDevice("d22", "Bedroom shade", "shade", "Primary Bedroom", { intensity: 40, shadePos: 40 }),
  demoDevice("d23", "Primary bath light", "light", "Primary Bath", { intensity: 55, kelvin: 4000 }),
  demoDevice("d24", "Primary bath fan", "fan", "Primary Bath", { intensity: 30, fan: "low" }),
  demoDevice("d25", "Office lamp", "light", "Office", { intensity: 62, kelvin: 4000 }),
  demoDevice("d26", "Guest lamp", "light", "Guest Bedroom", { intensity: 48, kelvin: 2700 }),
  demoDevice("d27", "Kids lamp", "light", "Kids Bedroom", { intensity: 42, kelvin: 2700 }),
  demoDevice("d28", "Kids speaker", "audio", "Kids Bedroom", { on: false, intensity: 0, volume: 0 }),
  demoDevice("d29", "Loft light", "light", "Loft", { intensity: 58 }),
  demoDevice("d30", "Hall bath light", "light", "Hall Bath", { intensity: 50, kelvin: 4000 }),
  demoDevice("d31", "Laundry light", "light", "Laundry", { intensity: 90, kelvin: 5000 }),
  demoDevice("d32", "Media speakers", "audio", "Media Room", { intensity: 44, volume: 44 }),
  demoDevice("d33", "Media shade", "shade", "Media Room", { intensity: 20, shadePos: 20 }),
  demoDevice("d34", "Gym light", "light", "Gym", { intensity: 88, kelvin: 5000 }),
  demoDevice("d35", "Gym fan", "fan", "Gym", { intensity: 55, fan: "high" }),
  demoDevice("d36", "Cellar light", "light", "Wine cellar", { intensity: 36, kelvin: 2700 }),
  demoDevice("d37", "Suite lamp", "light", "Guest suite", { intensity: 46 }),
  demoDevice("d38", "Utility light", "light", "Utility", { intensity: 100, kelvin: 5000 }),
  demoDevice("d14", "Front cam", "camera", "Front yard"),
  demoDevice("d39", "Yard lights", "light", "Backyard", { intensity: 70 }),
  demoDevice("d40", "Pool lights", "light", "Pool", { intensity: 60, kelvin: 2700 }),
  demoDevice("d41", "Patio speakers", "audio", "Patio", { intensity: 30, volume: 30 }),
  demoDevice("d42", "Garage light", "light", "Garage", { intensity: 100, kelvin: 5000 }),
  demoDevice("d43", "Path lights", "light", "Front yard", { seed: false, intensity: 45, kelvin: 2700 }),
  demoDevice("d44", "Pool pump", "fan", "Pool", { seed: false, intensity: 80, fan: "high" }),
  demoDevice("d45", "Garage camera", "camera", "Garage", { seed: false }),
];

function blankState() {
  return {
    screen: "landing",
    showHelp: false,
    toast: null,
    toastTitle: null,
    toastKind: null,
    deviceSnapshot: null,
    modal: null,
    confirm: null,
    uploadPct: 0,
    arcStatus: "offline",
    selectedFloor: 0,
    selectedRoom: 0,
    hereFloor: 0,
    hereRoom: 0,
    search: "",
    showPass: false,
    showPass2: false,
    account: {
      first: "John",
      last: "Doe",
      email: "john@apexsmart.home",
      company: "",
      license: "",
      password: "•••••••••",
      confirm: "•••••••••",
    },
    property: {
      type: "residential",
      name: "",
      timezone: TIMEZONES[3],
      street: "",
      unit: "",
      city: "",
      state: "",
      zip: "",
      owner: "",
      ownerRole: "Admin",
      accessKey: "",
      cover: "",
    },
    floors: [],
    devices: [],
    deviceScan: "idle",
    scanToken: 0,
    scanStatus: "",
    scanResult: null,
    properties: [],
    draft: loadDraft(),
    leaveDest: "dashboard",
    loggedIn: false,
    addingProperty: false,
    roomView: "list",
    planView: "3d",
    layoutView: loadLayoutView(),
    roomPanel: "devices",
    tablePeek: false,
    selectedRooms: [],
    selectedDevice: null,
    sheetAccord: { test: true, hardware: true, network: true },
    deviceAccord: {},
    addDeviceKind: null,
    flashingDevice: null,
    propertyDraft: null,
    previewProperty: null,
    homeView: "list",
    homeFilter: "all",
    portalMode: loadMode(),
    propertyView: "rooms",
    selectedScene: null,
    reviewing: false,
    jemmVisible: loadJemmUi().on,
    jemmDock: false,
    jemmPlace: loadJemmUi().place,
    jemmMenu: false,
    jemmSideOpen: false,
    voiceMode: false,
    voiceHeard: "",
    jemmReply: "",
    voiceError: "",
    clientsView: "table",
    clientQuery: "",
    clientFilter: "all",
    selectedProperties: [],
    clientsOpen: null,
    clientsMenu: false,
    salesChart: "cumulative",
    salesSku: "arc",
    salesPlan: "subscription",
    clientPage: 1,
    propMenu: false,
    notifyOpen: false,
    roomsMenu: false,
    roomMenu: null,
    editingRoom: null,
    navSearch: "",
    jemmVideo: false,
    sidebarOpen: true,
    formTouched: {},
    theme: loadTheme(),
    coach: null,
    suggestions: [],
    uploadCad: false,
    uploadPlan: null,
  };
}

const SESSION_KEY = "jemm-session";
const DRAFT_KEY = "jemm-onboarding-draft";
const THEME_KEY = "jemm-theme";
const MODE_KEY = "jemm-mode";
const JEMM_UI_KEY = "jemm-ui";
const LAYOUT_VIEW_KEY = "jemm-layout-view";

function loadLayoutView() {
  try {
    const v = localStorage.getItem(LAYOUT_VIEW_KEY);
    if (v === "list" || v === "table") return "list";
    if (v === "3d" || v === "house3d" || v === "columns") return "3d";
  } catch {}
  return "3d";
}

function persistLayoutView() {
  try {
    localStorage.setItem(LAYOUT_VIEW_KEY, isListLayout() ? "list" : "3d");
  } catch {}
}

function isListLayout() {
  return state.layoutView === "list" || state.layoutView === "table";
}

function loadMode() {
  try {
    return localStorage.getItem(MODE_KEY) === "office" ? "office" : "residential";
  } catch {
    return "residential";
  }
}

function persistMode(mode) {
  localStorage.setItem(MODE_KEY, mode === "office" ? "office" : "residential");
}

const PORTAL_MODES = [
  { id: "residential", label: "Residential", icon: "assets/nav/badge-home.svg", type: "residential" },
  { id: "office", label: "Office", icon: "assets/nav/badge-office.svg", type: "commercial" },
];

function currentMode() {
  return state.portalMode === "office" ? PORTAL_MODES[1] : PORTAL_MODES[0];
}

function propertyMode(p) {
  return p?.details?.type === "commercial" || p?.type === "commercial" ? "office" : "residential";
}

function modeProperties(list = liveProperties()) {
  const mode = currentMode().id;
  return list.filter((p) => propertyMode(p) === mode);
}
const APP_NAV = [
  { id: "dashboard", label: "Home", icon: "assets/nav/icon-home.svg" },
  { id: "hub-rooms", label: "Rooms", icon: "assets/nav/icon-rooms.svg" },
  { id: "clients", label: "Clients", icon: "assets/nav/icon-clients.svg" },
  { id: "insights", label: "Insights", icon: "assets/nav/icon-insights.svg" },
  { id: "settings", label: "Settings", icon: "assets/nav/icon-settings.svg" },
];
const ONBOARDING = ["account", "property", "arc", "rooms", "devices"];
const STEP_META = {
  account: { n: 1, label: "Account" },
  property: { n: 2, label: "Property" },
  arc: { n: 3, label: "Jemm Arc" },
  rooms: { n: 4, label: "Rooms & layout" },
  devices: { n: 5, label: "Devices" },
};

function loadDraft() {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function loadTheme() {
  try {
    return localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme === "light" ? "light" : "dark";
}

function persistTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme);
}

const JEMM_PLACES = [
  { id: "top", label: "Top" },
  { id: "bottom", label: "Bottom" },
];

function normalizeJemmPlace(place) {
  return place === "bottom" ? "bottom" : "top";
}

function loadJemmUi() {
  try {
    const raw = JSON.parse(localStorage.getItem(JEMM_UI_KEY) || "{}");
    return {
      on: typeof raw.on === "boolean" ? raw.on : true,
      place: normalizeJemmPlace(raw.place || raw.slot),
    };
  } catch {
    return { on: true, place: "top" };
  }
}

function persistJemmUi() {
  localStorage.setItem(JEMM_UI_KEY, JSON.stringify({
    on: state.jemmVisible !== false,
    place: normalizeJemmPlace(state.jemmPlace),
  }));
}

function jemmOrb(extraClass = "") {
  return `
    <button type="button" class="jemm-orb ${extraClass} ${state.voiceMode ? "is-live" : ""}" data-action="toggle-voice" aria-label="${state.voiceMode ? "Stop listening" : "Talk to Jemm"}">
      <img src="assets/nav/jemm.png" alt="Jemm" />
      <span class="jemm-orb__mouth" aria-hidden="true"></span>
    </button>`;
}

function showPageJemm() {
  return state.jemmVisible && !["landing", "welcome", "signin"].includes(state.screen);
}

function jemmSideCompetes() {
  if (!showPageJemm() || normalizeJemmPlace(state.jemmPlace) !== "side") return false;
  if (state.selectedDevice) return true;
  if (state.screen === "rooms" && state.floors.length > 0) return true;
  if (state.tablePeek) return true;
  return false;
}

function jemmNavToggle() {
  const on = state.jemmVisible !== false;
  const place = normalizeJemmPlace(state.jemmPlace);
  const open = !!state.jemmMenu;
  return `
    <div class="jemm-place" data-keep-menu>
      <div class="jemm-place__btn ${on ? "is-on" : ""} ${state.voiceMode && on ? "is-live" : ""}">
        <button type="button" class="jemm-place__face-wrap" data-action="toggle-jemm" aria-pressed="${on ? "true" : "false"}" aria-label="${on ? "Hide Jemm avatar on this page" : "Show Jemm avatar on this page"}">
          <img class="jemm-place__face" src="assets/nav/jemm.png" alt="" />
        </button>
        <button type="button" class="jemm-place__open" data-action="toggle-jemm-menu" aria-haspopup="listbox" aria-expanded="${open}" aria-label="Choose where Jemm appears">
          <span>Jemm</span>
          <img class="jemm-place__chev ${open ? "is-open" : ""}" src="assets/nav/chevron.svg" alt="" />
        </button>
      </div>
      ${open ? `
        <div class="jemm-place__menu" role="listbox" aria-label="Choose where Jemm appears">
          <p class="jemm-place__title">Choose where Jemm appears</p>
          ${JEMM_PLACES.map((p) => `
            <button type="button" class="jemm-place__item ${on && place === p.id ? "is-on" : ""}" data-action="set-jemm-place" data-value="${p.id}" role="option" aria-selected="${on && place === p.id ? "true" : "false"}">
              ${esc(p.label)}
            </button>`).join("")}
        </div>` : ""}
    </div>`;
}

function persistSession() {
  localStorage.setItem(SESSION_KEY, JSON.stringify({
    loggedIn: true,
    account: state.account,
    properties: state.properties,
    jemmVisible: state.jemmVisible,
  }));
}

function asPropertyRecords(list) {
  return (list || []).map((p) => (typeof p === "string" ? { id: p, name: p, status: "live" } : p));
}

function liveProperties() {
  return asPropertyRecords(state.properties);
}

function isOnboarding(screen = state.screen) {
  return ONBOARDING.includes(screen);
}

function shouldConfirmLeave(dest) {
  if (state.reviewing) return false;
  return isOnboarding() && ["landing", "dashboard", "signin", "profile", "settings", "clients", "hub-rooms", "insights"].includes(dest);
}

let state = blankState();
let timers = [];
let lastScreen = null;
let lastSheetId = null;

function flashToast(title, message, kind = "success") {
  setState({
    toast: message,
    toastTitle: title,
    toastKind: kind === "error" ? "error" : "success",
  });
  later(() => {
    if (state.toast === message) setState({ toast: null, toastTitle: null, toastKind: null });
  }, kind === "error" ? 5600 : 3600);
}

function gateNavigation(dest) {
  const from = state.screen;
  const portal = ["landing", "signin", "dashboard", "clients", "hub-rooms", "insights", "settings", "profile"];
  if (portal.includes(dest)) return null;
  const order = ["welcome", "account", "property", "arc", "rooms", "devices", "done", "dashboard"];
  if (order.indexOf(dest) <= order.indexOf(from)) return null;
  if (from === "account") {
    const a = state.account || {};
    if (!String(a.first || "").trim() || !String(a.last || "").trim()) return "Add your first and last name.";
    if (!String(a.email || "").includes("@")) return "Enter a valid email.";
    if (a.password && a.confirm && a.password !== a.confirm) return "Password and confirmation don’t match.";
  }
  if (from === "property") {
    const errors = propertyFieldErrors();
    if (errors.name || errors.street || errors.city) return "property-fields";
  }
  if (from === "rooms" && dest === "devices" && !state.floors.length) {
    return "Upload a floorplan or add a floor first.";
  }
  return null;
}

function mutateDevice(id, patch) {
  const apply = (d) => (String(d.id) === String(id) ? { ...d, ...patch } : d);
  return {
    devices: state.devices.map(apply),
    properties: liveProperties().map((p) => ({ ...p, devices: (p.devices || []).map(apply) })),
  };
}

function later(fn, ms) {
  const id = setTimeout(fn, ms);
  timers.push(id);
  return id;
}
function clearTimers() {
  timers.forEach(clearTimeout);
  timers = [];
}

function setState(patch) {
  state = { ...state, ...patch };
  if (patch.jemmPlace != null || patch.jemmVisible != null) persistJemmUi();
  render();
}

function update(path, value) {
  const next = structuredClone(state);
  const keys = path.split(".");
  let cur = next;
  for (let i = 0; i < keys.length - 1; i++) cur = cur[keys[i]];
  cur[keys[keys.length - 1]] = value;
  state = next;
  render();
}

function withJemmMove(patch) {
  const moving = patch.jemmPlace != null && patch.jemmPlace !== state.jemmPlace;
  if (moving) playJemmTravel(patch.jemmPlace);
  const run = () => setState(patch);
  if (
    moving
    && typeof document.startViewTransition === "function"
    && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    document.startViewTransition(run);
    return;
  }
  run();
}

function go(screen) {
  if (screen === "landing" && state.loggedIn) screen = "dashboard";
  clearTimers();
  const from = state.screen;
  if (screen !== from) resetJemmSpeech();
  const patch = { screen, modal: null, selectedDevice: null, previewProperty: null };
  if (["dashboard", "clients", "hub-rooms", "insights", "settings", "profile", "done"].includes(screen) && state.reviewing) {
    patch.reviewing = false;
  }
  if (screen === "rooms" && state.loggedIn && !state.addingProperty && (state.property.name || state.floors.length)) {
    patch.reviewing = true;
  }
  const reviewing = patch.reviewing === true || (patch.reviewing !== false && state.reviewing);
  if (screen === "rooms" && !reviewing && (isOnboarding(screen) || state.addingProperty)) {
    if (!state.coach) patch.coach = state.floors.length ? "suggest" : "upload";
  }
  if (screen === "welcome") {
    patch.jemmVisible = true;
    patch.jemmPlace = "top";
  }
  if (isOnboarding(screen) && !isOnboarding(from)) {
    patch.voiceMode = false;
  }
  if (screen === "arc") {
    patch.arcStatus = "searching";
    later(() => {
      if (state.screen === "arc") setState({ arcStatus: "connecting" });
    }, 2200);
    later(() => {
      if (state.screen === "arc") setState({ arcStatus: "online" });
    }, 4800);
  }
  if (screen === "rooms" && state.addingProperty && state.arcStatus !== "online") {
    patch.arcStatus = "online";
  }
  if (screen === "devices" && state.deviceScan === "idle") {
    if (state.devices.length) {
      patch.deviceScan = "found";
    } else {
      patch.deviceScan = "scanning";
      later(() => {
        if (state.screen === "devices") setState({ deviceScan: "found", devices: devicesForLayout() });
      }, 2600);
    }
  }
  const flyJemm = (from === "landing" && screen === "welcome") || (from === "welcome" && screen === "account");
  const apply = () => setState(patch);
  if (
    flyJemm
    && typeof document.startViewTransition === "function"
    && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    document.startViewTransition(apply);
    return;
  }
  apply();
}

function cloneFloors(src = DEMO_FLOORS) {
  return src.map((f) => ({
    ...f,
    rooms: f.rooms.map((r) => ({ ...r })),
  }));
}

function deviceSeed(id) {
  const s = String(id || "d0");
  let n = 0;
  for (let i = 0; i < s.length; i++) n = (n + s.charCodeAt(i) * (i + 3)) % 200;
  return n + 21;
}

function deviceControlType(d) {
  if (!d) return null;
  if (d.kind === "light") return "light";
  if (d.kind === "audio") return "audio";
  if (d.kind === "climate" || d.kind === "hvac") return "hvac";
  if (d.kind === "shade") return "shade";
  if (d.kind === "camera") return "camera";
  if (d.kind === "fan") return "fan";
  if (d.kind === "arc" || d.kind === "mic") return "jemm";
  if (d.kind === "remote") return "power";
  return null;
}

function deviceDefaults(d) {
  const n = deviceSeed(d.id);
  const hex = (v) => v.toString(16).padStart(2, "0").toUpperCase();
  const type = deviceControlType(d);
  const protocol = {
    light: "Lutron HomeWorks QSX",
    shade: "Lutron HomeWorks QSX",
    audio: "Sonos",
    climate: "BACnet IP",
    hvac: "BACnet IP",
    camera: "RTSP",
    fan: "Lutron Caseta",
    mic: "Jemm native",
    remote: "Jemm native",
    arc: "Jemm Arc native",
  }[d.kind] || "Matter";
  const channel = type === "light" || type === "shade"
    ? `Load ${n % 48 + 1}`
    : type === "hvac"
      ? `AHU-${n % 6 + 1}`
      : `Endpoint ${n % 24 + 1}`;
  const maker = {
    light: "Lutron",
    shade: "Lutron",
    audio: "Sonos",
    camera: "Google",
    fan: "Hunter",
    climate: "Honeywell",
    mic: "Jemm Tec, LLC",
    remote: "Jemm Tec, LLC",
    arc: "Jemm Tec, LLC",
  }[d.kind] || "Unknown";
  return {
    kelvin: 3000,
    fade: "1s",
    volume: d.intensity ?? 40,
    muted: false,
    source: "Sonos Port",
    hvacMode: d.on === false ? "off" : "auto",
    fan: "auto",
    targetTemp: Math.min(80, Math.max(60, Number(d.intensity) || 72)),
    shadePos: d.intensity ?? 0,
    protocol,
    ip: `10.12.4.${n}`,
    mac: `B8:27:EB:${hex(n)}:4C:${hex((n * 3) % 256)}`,
    channel,
    hwId: `ID${String(74000 + n).slice(-5)}`,
    manufacturer: maker,
    updated: "August 01, 2026 at 07:00:00pm EAST",
  };
}

function deviceView(d) {
  if (!d) return null;
  return { ...deviceDefaults(d), ...d };
}

function cloneDevices(src = DEMO_DEVICES) {
  return src.map((d) => deviceView(d));
}

const DEMO_FLOORS_LANGFORD = [
  {
    id: "lf1",
    name: "Main level",
    plan: "assets/floorplan-1.png",
    rooms: [
      { name: "Living Room", photo: "assets/room-living.png" },
      { name: "Kitchen" },
      { name: "Dining" },
      { name: "Primary Bedroom" },
      { name: "Primary Bath" },
      { name: "Office" },
    ],
  },
  {
    id: "lf2",
    name: "Upper level",
    plan: "assets/floorplan-2.png",
    rooms: [
      { name: "Guest Bedroom" },
      { name: "Media Room" },
      { name: "Loft" },
      { name: "Hall Bath" },
    ],
  },
  {
    id: "lf3",
    name: "Roof terrace",
    plan: "assets/floorplan-1.png",
    rooms: [
      { name: "Roof lounge" },
      { name: "Outdoor kitchen" },
      { name: "Hot tub" },
    ],
  },
  {
    id: "lf4",
    name: "Outside",
    plan: "assets/floorplan-2.png",
    rooms: [
      { name: "Front terrace" },
      { name: "Pool deck" },
      { name: "Garage" },
    ],
  },
];

const DEMO_DEVICES_LANGFORD = [
  demoDevice("l1", "Jemm Arc", "arc", "Office", { intensity: 100, firmware: "2.4.1", size: "8” (D) x 6” (H)", weight: "4.2lbs" }),
  demoDevice("l2", "Jemm Mic", "mic", "Living Room", { intensity: 70, firmware: "1.8.0" }),
  demoDevice("l5", "Living light", "light", "Living Room", { intensity: 68, kelvin: 3000 }),
  demoDevice("l6", "Living speakers", "audio", "Living Room", { intensity: 34, volume: 34 }),
  demoDevice("l3", "Kitchen island", "light", "Kitchen", { intensity: 55, firmware: "3.1.0" }),
  demoDevice("l7", "Dining pendant", "light", "Dining", { intensity: 60, kelvin: 2700 }),
  demoDevice("l4", "Bedroom shade", "shade", "Primary Bedroom", { intensity: 20, shadePos: 20 }),
  demoDevice("l8", "Jemm Remote", "remote", "Primary Bedroom", { intensity: 48 }),
  demoDevice("l9", "Primary bath light", "light", "Primary Bath", { intensity: 52, kelvin: 4000 }),
  demoDevice("l10", "Office lamp", "light", "Office", { intensity: 64, kelvin: 4000 }),
  demoDevice("l11", "Guest lamp", "light", "Guest Bedroom", { intensity: 44 }),
  demoDevice("l12", "Media speakers", "audio", "Media Room", { intensity: 40, volume: 40 }),
  demoDevice("l13", "Loft light", "light", "Loft", { intensity: 58 }),
  demoDevice("l14", "Hall bath light", "light", "Hall Bath", { intensity: 50 }),
  demoDevice("l15", "Roof lounge light", "light", "Roof lounge", { intensity: 42, kelvin: 2700 }),
  demoDevice("l16", "Outdoor kitchen light", "light", "Outdoor kitchen", { intensity: 80, kelvin: 3000 }),
  demoDevice("l17", "Hot tub light", "light", "Hot tub", { intensity: 36, kelvin: 2700 }),
  demoDevice("l18", "Terrace cam", "camera", "Front terrace"),
  demoDevice("l19", "Pool deck lights", "light", "Pool deck", { intensity: 70 }),
  demoDevice("l20", "Garage light", "light", "Garage", { intensity: 100, kelvin: 5000 }),
  demoDevice("l21", "Legacy keypad", "light", "Living Room", { on: false, intensity: 0, offline: true }),
  demoDevice("l22", "Path lights", "light", "Front terrace", { seed: false, intensity: 40, kelvin: 2700 }),
  demoDevice("l23", "Garage camera", "camera", "Garage", { seed: false }),
];

const DEMO_FLOORS_GUEST = [
  {
    id: "gf1",
    name: "Main level",
    plan: "assets/floorplan-1.png",
    rooms: [
      { name: "Living Room", photo: "assets/room-living.png" },
      { name: "Kitchen" },
      { name: "Bedroom" },
      { name: "Bath" },
    ],
  },
  {
    id: "gf2",
    name: "Loft",
    plan: "assets/floorplan-2.png",
    rooms: [
      { name: "Loft bedroom" },
      { name: "Loft bath" },
    ],
  },
  {
    id: "gf3",
    name: "Garden level",
    plan: "assets/floorplan-1.png",
    rooms: [
      { name: "Studio" },
      { name: "Laundry" },
    ],
  },
  {
    id: "gf4",
    name: "Outside",
    plan: "assets/floorplan-2.png",
    rooms: [
      { name: "Front yard" },
      { name: "Courtyard" },
      { name: "Pool" },
      { name: "Garage" },
    ],
  },
];

const DEMO_DEVICES_GUEST = [
  demoDevice("g1", "Jemm Arc", "arc", "Studio", { intensity: 100, firmware: "2.4.1" }),
  demoDevice("g2", "Living light", "light", "Living Room", { intensity: 62 }),
  demoDevice("g3", "Living speakers", "audio", "Living Room", { intensity: 28, volume: 28 }),
  demoDevice("g4", "Kitchen pendant", "light", "Kitchen", { intensity: 70 }),
  demoDevice("g5", "Bedroom lamp", "light", "Bedroom", { intensity: 44, kelvin: 2700 }),
  demoDevice("g6", "Bedroom shade", "shade", "Bedroom", { intensity: 30, shadePos: 30 }),
  demoDevice("g7", "Bath light", "light", "Bath", { intensity: 55, kelvin: 4000 }),
  demoDevice("g8", "Loft lamp", "light", "Loft bedroom", { intensity: 48 }),
  demoDevice("g9", "Loft bath light", "light", "Loft bath", { intensity: 50 }),
  demoDevice("g10", "Studio lamp", "light", "Studio", { intensity: 66, kelvin: 4000 }),
  demoDevice("g11", "Laundry light", "light", "Laundry", { intensity: 90, kelvin: 5000 }),
  demoDevice("g12", "Front cam", "camera", "Front yard"),
  demoDevice("g13", "Courtyard lights", "light", "Courtyard", { intensity: 58 }),
  demoDevice("g14", "Pool lights", "light", "Pool", { intensity: 64, kelvin: 2700 }),
  demoDevice("g15", "Garage light", "light", "Garage", { intensity: 100 }),
  demoDevice("g16", "Old patio bulb", "light", "Courtyard", { on: false, offline: true, intensity: 0 }),
  demoDevice("g17", "Path lights", "light", "Front yard", { seed: false, intensity: 40 }),
  demoDevice("g18", "Garage camera", "camera", "Garage", { seed: false }),
];

const DEMO_FLOORS_PALM = [
  {
    id: "pf1",
    name: "Lobby level",
    plan: "assets/floorplan-1.png",
    rooms: [
      { name: "Lobby" },
      { name: "Reception" },
      { name: "Conference A" },
      { name: "Break room" },
    ],
  },
  {
    id: "pf2",
    name: "Workspace",
    plan: "assets/floorplan-2.png",
    rooms: [
      { name: "Open office" },
      { name: "Huddle 1" },
      { name: "Huddle 2" },
      { name: "IT closet", photo: "assets/step-ethernet.png" },
    ],
  },
  {
    id: "pf3",
    name: "Amenities",
    plan: "assets/floorplan-1.png",
    rooms: [
      { name: "Wellness" },
      { name: "Cafe" },
      { name: "Board room" },
      { name: "Copy room" },
    ],
  },
  {
    id: "pf4",
    name: "Exterior",
    plan: "assets/floorplan-2.png",
    rooms: [
      { name: "Plaza" },
      { name: "Garage" },
      { name: "Loading dock" },
      { name: "Courtyard" },
    ],
  },
];

const DEMO_DEVICES_PALM = [
  demoDevice("c1", "Jemm Arc", "arc", "IT closet", { intensity: 100, firmware: "2.4.1", size: "8” (D) x 6” (H)", weight: "4.2lbs" }),
  demoDevice("c2", "Lobby light", "light", "Lobby", { intensity: 80, kelvin: 4000, firmware: "3.1.0" }),
  demoDevice("c8", "Lobby cam", "camera", "Lobby"),
  demoDevice("c9", "Reception lamp", "light", "Reception", { intensity: 70, kelvin: 4000 }),
  demoDevice("c7", "Conference speakers", "audio", "Conference A", { intensity: 32, volume: 32, source: "AirPlay 2" }),
  demoDevice("c4", "Jemm Mic", "mic", "Conference A", { intensity: 60, firmware: "1.8.0" }),
  demoDevice("c6", "Jemm Remote", "remote", "Conference A", { intensity: 40, firmware: "1.2.3" }),
  demoDevice("c10", "Break room light", "light", "Break room", { intensity: 74 }),
  demoDevice("c3", "Open office light", "light", "Open office", { intensity: 64, kelvin: 4000 }),
  demoDevice("c5", "Office thermostat", "climate", "Open office", { intensity: 70, firmware: "4.0.2" }),
  demoDevice("c11", "Huddle 1 light", "light", "Huddle 1", { intensity: 58 }),
  demoDevice("c12", "Huddle 2 light", "light", "Huddle 2", { intensity: 58 }),
  demoDevice("c13", "Wellness light", "light", "Wellness", { intensity: 46, kelvin: 2700 }),
  demoDevice("c14", "Cafe speakers", "audio", "Cafe", { intensity: 26, volume: 26 }),
  demoDevice("c15", "Board room light", "light", "Board room", { intensity: 72, kelvin: 4000 }),
  demoDevice("c16", "Copy room light", "light", "Copy room", { intensity: 90, kelvin: 5000 }),
  demoDevice("c17", "Plaza lights", "light", "Plaza", { intensity: 80 }),
  demoDevice("c18", "Garage light", "light", "Garage", { intensity: 100, kelvin: 5000 }),
  demoDevice("c19", "Dock light", "light", "Loading dock", { intensity: 100, kelvin: 5000 }),
  demoDevice("c20", "Courtyard lights", "light", "Courtyard", { intensity: 64 }),
  demoDevice("c21", "Spare lobby lamp", "light", "Lobby", { on: false, intensity: 0, offline: true }),
  demoDevice("c22", "Plaza cam", "camera", "Plaza", { seed: false }),
  demoDevice("c23", "Garage camera", "camera", "Garage", { seed: false }),
];

function catalogForProperty() {
  const match = currentPropertyRecord();
  const key = String(match?.id || "");
  if (key === "p-palm" || state.property?.type === "commercial") return DEMO_DEVICES_PALM;
  if (key === "p-langford-guest") return DEMO_DEVICES_GUEST;
  if (key === "p-langford") return DEMO_DEVICES_LANGFORD;
  return DEMO_DEVICES;
}

function networkActiveDevices() {
  const rooms = existingRoomNames();
  return cloneDevices(catalogForProperty().filter((d) => !d.offline)).map((d, i) => ({
    ...d,
    room: rooms.includes(d.room) ? d.room : (rooms[i % Math.max(rooms.length, 1)] || d.room),
  }));
}

function reconcileNetworkDevices(current, network) {
  const netById = new Map(network.map((d) => [deviceNetId(d), d]));
  const seen = new Set();
  const kept = [];
  const removed = [];
  (current || []).forEach((d) => {
    const key = deviceNetId(d);
    if (d.manual) {
      kept.push(d);
      seen.add(key);
      return;
    }
    if (netById.has(key)) {
      kept.push(d);
      seen.add(key);
      return;
    }
    if (d.netId || catalogForProperty().some((c) => deviceNetId(c) === key)) {
      removed.push(d);
      return;
    }
    kept.push(d);
    seen.add(key);
  });
  const added = [];
  network.forEach((d, i) => {
    const key = deviceNetId(d);
    if (seen.has(key)) return;
    added.push({ ...d, id: `d-${Date.now()}-${i}`, netId: key });
    seen.add(key);
  });
  return { devices: [...kept, ...added], added, removed };
}

function beginDeviceScan() {
  const token = (state.scanToken || 0) + 1;
  const patch = {
    modal: "add-device",
    deviceScan: "scanning",
    scanToken: token,
    scanStatus: "Listening for Jemm Arc…",
    scanResult: null,
  };
  if (state.coach === "add-device") patch.coach = "sync";
  setState(patch);
  later(() => {
    if (state.scanToken !== token || state.modal !== "add-device" || state.deviceScan !== "scanning") return;
    setState({ scanStatus: "Reading devices on the network…" });
  }, 700);
  later(() => {
    if (state.scanToken !== token || state.modal !== "add-device" || state.deviceScan !== "scanning") return;
    setState({ scanStatus: "Matching rooms and activity…" });
  }, 1500);
  later(() => {
    if (state.scanToken !== token || state.modal !== "add-device" || state.deviceScan !== "scanning") return;
    finishDeviceScan();
  }, 2400);
}

function finishDeviceScan() {
  const { devices, added, removed } = reconcileNetworkDevices(state.devices, networkActiveDevices());
  const patch = {
    devices,
    deviceScan: "found",
    scanResult: { added, removed },
    scanStatus: "",
  };
  if (state.coach === "add-device" || state.coach === "sync") {
    patch.layoutView = "3d";
    patch.roomPanel = "devices";
    const want = (added[0] || devices[0])?.room;
    (state.floors || []).forEach((f, fi) => {
      (f.rooms || []).forEach((r, ri) => {
        if (want && roomName(r) === want) {
          patch.selectedFloor = fi;
          patch.selectedRoom = ri;
        }
      });
    });
  }
  setState(patch);
  persistLayout();
  if (!added.length && !removed.length) {
    flashToast("Already in sync", "No devices were added or removed.");
  } else {
    const bits = [];
    if (added.length) bits.push(`${added.length} added`);
    if (removed.length) bits.push(`${removed.length} no longer active`);
    flashToast("Devices synced", bits.join(" · "));
  }
}

function closeScanResult() {
  const devices = state.devices || [];
  const patch = { modal: null, scanResult: null, deviceScan: "found" };
  if (state.coach === "add-device" || state.coach === "sync") {
    patch.coach = nextCoachAfter("sync", devices);
    patch.layoutView = "3d";
    patch.roomPanel = "devices";
  }
  setState(patch);
}

function exampleProperties() {
  return [
    {
      id: "p-christo",
      status: "live",
      details: {
        type: "residential",
        name: "Christo’s home",
        timezone: TIMEZONES[3],
        street: "1847 Bayshore Drive",
        unit: "",
        city: "Miami",
        state: "Florida",
        zip: "33132",
        lat: 25.7825,
        lng: -80.1868,
        owner: "Christo Reyes",
        ownerRole: "Admin",
        accessKey: "0927495",
      },
      client: {
        id: "c-reyes",
        name: "Christo Reyes",
        email: "christo@reyes.family",
        phone: "+1 (305) 555-0142",
      },
      lastCheck: "2 min ago",
      note: "Foyer thermostat reported an error. Remote check pending.",
      layoutRev: EXAMPLE_LAYOUT_REV,
      floors: cloneFloors(),
      devices: seedDevices(DEMO_DEVICES),
      arcStatus: "online",
    },
    {
      id: "p-langford",
      status: "live",
      details: {
        type: "residential",
        name: "The Langford",
        timezone: TIMEZONES[3],
        street: "88 Ocean Drive",
        unit: "Penthouse",
        city: "Miami Beach",
        state: "Florida",
        zip: "33139",
        lat: 25.7752,
        lng: -80.1312,
        owner: "Maya Langford",
        ownerRole: "Admin",
        accessKey: "1844201",
      },
      client: {
        id: "c-langford",
        name: "Maya Langford",
        email: "maya@langford.co",
        phone: "+1 (305) 555-0199",
      },
      lastCheck: "8 min ago",
      note: "",
      layoutRev: EXAMPLE_LAYOUT_REV,
      floors: cloneFloors(DEMO_FLOORS_LANGFORD),
      devices: seedDevices(DEMO_DEVICES_LANGFORD),
      arcStatus: "online",
    },
    {
      id: "p-langford-guest",
      status: "live",
      details: {
        type: "residential",
        name: "Langford Guest House",
        timezone: TIMEZONES[3],
        street: "90 Ocean Drive",
        unit: "",
        city: "Miami Beach",
        state: "Florida",
        zip: "33139",
        lat: 25.776,
        lng: -80.1304,
        owner: "Maya Langford",
        ownerRole: "Admin",
        accessKey: "1844202",
      },
      client: {
        id: "c-langford",
        name: "Maya Langford",
        email: "maya@langford.co",
        phone: "+1 (305) 555-0199",
      },
      lastCheck: "14 min ago",
      note: "",
      layoutRev: EXAMPLE_LAYOUT_REV,
      floors: cloneFloors(DEMO_FLOORS_GUEST),
      devices: seedDevices(DEMO_DEVICES_GUEST),
      arcStatus: "online",
    },
    {
      id: "p-palm",
      status: "live",
      details: {
        type: "commercial",
        name: "Palm Court Offices",
        timezone: TIMEZONES[3],
        street: "2100 Brickell Ave",
        unit: "Suite 400",
        city: "Miami",
        state: "Florida",
        zip: "33129",
        lat: 25.7616,
        lng: -80.1918,
        owner: "Palm Court Facilities",
        ownerRole: "Admin",
        accessKey: "2100400",
      },
      client: {
        id: "c-palm",
        name: "Palm Court Facilities",
        email: "ops@palmcourt.com",
        phone: "+1 (305) 555-0200",
      },
      lastCheck: "22 min ago",
      note: "PoE budget watch on Lobby switch. No ticket yet.",
      layoutRev: EXAMPLE_LAYOUT_REV,
      floors: cloneFloors(DEMO_FLOORS_PALM),
      devices: seedDevices(DEMO_DEVICES_PALM),
      arcStatus: "online",
    },
  ];
}

function mergeExampleProperties(list) {
  const records = asPropertyRecords(list);
  const examples = exampleProperties();
  const byId = new Map(examples.map((p) => [String(p.id), p]));
  const merged = records.map((p) => {
    const ex = byId.get(String(p.id));
    if (!ex) return p;
    if (p.layoutRev === EXAMPLE_LAYOUT_REV && (p.floors?.length || 0) >= 3) {
      return { ...p, layoutRev: EXAMPLE_LAYOUT_REV };
    }
    return {
      ...p,
      layoutRev: EXAMPLE_LAYOUT_REV,
      devices: cloneDevices(ex.devices),
      floors: cloneFloors(ex.floors),
    };
  });
  const ids = new Set(merged.map((p) => String(p.id)));
  examples.forEach((ex) => {
    if (!ids.has(String(ex.id))) merged.push(ex);
  });
  return merged;
}

function wizardSteps(adding = state.addingProperty) {
  return adding ? ["property", "rooms", "devices"] : ["account", "property", "arc", "rooms", "devices"];
}

function stepProgress(screen = state.screen, adding = state.addingProperty) {
  const steps = wizardSteps(adding);
  const i = steps.indexOf(screen);
  if (i < 0) return null;
  return { n: i + 1, total: steps.length, label: STEP_META[screen]?.label || screen };
}

function roomName(room) {
  return typeof room === "string" ? room : room.name;
}

const ROOM_PLAN_POS = {
  "Foyer": [50, 74],
  "Living Room": [24, 72],
  "Kitchen": [50, 42],
  "Dining": [24, 22],
  "Primary Bedroom": [78, 22],
  "Bath": [74, 40],
  "Office": [82, 74],
  "Tech Closet": [68, 62],
  "Patio": [50, 8],
  "Guest Bedroom": [24, 28],
  "Kids Bedroom": [50, 28],
  "Loft": [76, 28],
  "Laundry": [24, 68],
  "Media Room": [72, 68],
  "Primary Bath": [74, 40],
  "Hall Bath": [78, 48],
  "Gym": [24, 58],
  "Wine cellar": [50, 62],
  "Guest suite": [76, 58],
  "Utility": [88, 78],
  "Front yard": [18, 88],
  "Backyard": [82, 88],
  "Pool": [50, 90],
  "Garage": [88, 72],
  "Bedroom": [76, 22],
  "Loft bedroom": [76, 28],
  "Loft bath": [82, 48],
  "Studio": [42, 58],
  "Courtyard": [70, 88],
  "Roof lounge": [28, 22],
  "Outdoor kitchen": [52, 18],
  "Hot tub": [78, 16],
  "Front terrace": [20, 88],
  "Pool deck": [50, 90],
  "Lobby": [50, 78],
  "Reception": [28, 62],
  "Open office": [42, 42],
  "Huddle 1": [22, 28],
  "Huddle 2": [50, 28],
  "Break room": [24, 48],
  "Wellness": [24, 58],
  "Cafe": [50, 58],
  "Board room": [78, 36],
  "Copy room": [82, 68],
  "Plaza": [50, 90],
  "Loading dock": [86, 78],
  "Conference": [78, 36],
  "Conference A": [78, 36],
  "IT closet": [82, 68],
};

function hashedPlanPos(label) {
  let h = 0;
  for (let i = 0; i < String(label || "").length; i++) h = (h * 31 + label.charCodeAt(i)) >>> 0;
  return [16 + (h % 68), 14 + ((h >> 7) % 70)];
}

function planRoomPos(label) {
  const p = ROOM_PLAN_POS[label] || hashedPlanPos(label);
  return { x: p[0], y: p[1] };
}

function defaultPresence(floors = state.floors) {
  if (!floors?.length) return { hereFloor: 0, hereRoom: 0 };
  const rooms = floors[0].rooms || [];
  const foyer = rooms.findIndex((r) => /^foyer$/i.test(roomName(r)));
  return { hereFloor: 0, hereRoom: foyer >= 0 ? foyer : 0 };
}

function clampPresence(floors = state.floors, hereFloor = state.hereFloor, hereRoom = state.hereRoom) {
  if (!floors.length) return { hereFloor: 0, hereRoom: 0 };
  const fi = Math.min(Math.max(0, Number(hereFloor) || 0), floors.length - 1);
  const rooms = floors[fi]?.rooms || [];
  const ri = rooms.length ? Math.min(Math.max(0, Number(hereRoom) || 0), rooms.length - 1) : 0;
  return { hereFloor: fi, hereRoom: ri };
}

function isHereRoom(floorIdx, roomIdx) {
  return Number(floorIdx) === Number(state.hereFloor) && Number(roomIdx) === Number(state.hereRoom);
}

function devicePlanPos(device, siblings) {
  const base = ROOM_PLAN_POS[device.room] || hashedPlanPos(device.room);
  const idx = Math.max(0, siblings.findIndex((d) => String(d.id) === String(device.id)));
  const spots = [[8, -8], [-8, 8], [10, 6], [-10, -4], [4, 12], [-6, -10]];
  const off = spots[idx % spots.length];
  return {
    x: Math.min(92, Math.max(8, base[0] + off[0])),
    y: Math.min(90, Math.max(8, base[1] + off[1])),
  };
}

function devicesOnFloor(floor, devices = state.devices) {
  const names = new Set((floor?.rooms || []).map(roomName));
  return (devices || []).filter((d) => names.has(d.room));
}

function renameRoomAt(index, nextName) {
  const floor = state.floors[state.selectedFloor];
  if (!floor?.rooms?.[index]) return;
  const prev = roomName(floor.rooms[index]);
  const name = nextName;
  if (typeof floor.rooms[index] === "string") floor.rooms[index] = name;
  else floor.rooms[index].name = name;
  if (prev === name) return;
  const retarget = (d) => {
    if (d.room === prev) d.room = name;
  };
  state.devices.forEach(retarget);
  liveProperties().forEach((p) => (p.devices || []).forEach(retarget));
}

function isEditingRoom(i) {
  return state.editingRoom != null && Number(state.editingRoom) === Number(i);
}

let roomSelectTimer = 0;
let roomRenameFocus = "row";

function focusRoomRename(i, from = roomRenameFocus) {
  requestAnimationFrame(() => {
    const sel = from === "title"
      ? "[data-room-title]"
      : `.room-row [data-room="${i}"], .rooms-table__name[data-room="${i}"], [data-room="${i}"]`;
    const el = document.querySelector(sel);
    if (!el) return;
    el.focus();
    if (typeof el.select === "function") el.select();
  });
}

function beginRoomRename(i, from = "row") {
  if (!Number.isFinite(i)) return;
  clearTimeout(roomSelectTimer);
  roomSelectTimer = 0;
  roomRenameFocus = from;
  setState({ selectedRoom: i, editingRoom: i, roomMenu: null });
  focusRoomRename(i, from);
}

function queueRoomSelect(i) {
  clearTimeout(roomSelectTimer);
  roomSelectTimer = setTimeout(() => {
    roomSelectTimer = 0;
    if (Number(state.selectedRoom) === Number(i) && state.editingRoom == null) return;
    setState({
      selectedRoom: i,
      roomMenu: null,
      editingRoom: null,
      tablePeek: state.layoutView === "table" ? true : state.tablePeek,
    });
  }, 280);
}

function roomRowNameHtml(i, label) {
  if (isEditingRoom(i)) {
    return `<div class="room-row__field is-editing"><input value="${esc(label)}" data-room="${i}" aria-label="Room name" /></div>`;
  }
  return `<div class="room-row__field"><span class="room-row__name" data-action="edit-room-name" data-index="${i}">${esc(label)}</span></div>`;
}

function roomsPlanTitleHtml(room, floor) {
  if (!room) return `<h2>${esc(floor.name || "Floorplan")}</h2>`;
  const i = state.selectedRoom;
  const selected = roomName(room);
  if (isEditingRoom(i)) {
    return `<input class="rooms-plan__title-input" value="${esc(selected)}" data-room="${i}" data-room-title aria-label="Room name" />`;
  }
  return `<h2 class="rooms-plan__title" data-action="edit-room-title" data-index="${i}">${esc(selected)}</h2>`;
}

function tableRoomNameHtml(i, label) {
  if (isEditingRoom(i)) {
    return `<input class="rooms-table__name" value="${esc(label)}" data-room="${i}" aria-label="Room name" />`;
  }
  return `<span class="rooms-table__name rooms-table__name--label" data-action="edit-room-name" data-index="${i}">${esc(label)}</span>`;
}

function persistLayout() {
  const rec = currentPropertyRecord();
  const name = state.property.name;
  state.properties = liveProperties().map((p) => {
    const match = rec ? String(p.id) === String(rec.id) : (p.details?.name || p.name) === name;
    if (!match) return p;
    return {
      ...p,
      layoutRev: p.layoutRev || EXAMPLE_LAYOUT_REV,
      floors: structuredClone(state.floors),
      devices: structuredClone(state.devices),
    };
  });
  if (state.loggedIn) persistSession();
}

let house3d = { yaw: -26, pitch: 64, auto: true, dragging: false, moved: false, lastX: 0, lastY: 0, raf: 0 };

function applyHouse3dTransform() {
  const rig = document.getElementById("house3d-rig");
  if (!rig) return;
  rig.style.transform = `rotateX(${house3d.pitch}deg) rotateZ(${house3d.yaw}deg)`;
}

function stopHouse3d() {
  cancelAnimationFrame(house3d.raf);
  house3d.raf = 0;
}

function bindPlan3d() {
  /* 3D is a static cutaway image — no tilt, drag, or auto-spin. */
}

function bindPlanDrop() {
  document.querySelectorAll("[data-plan-drop]").forEach((el) => {
    const onOver = (e) => {
      e.preventDefault();
      e.stopPropagation();
      el.classList.add("is-over");
    };
    el.addEventListener("dragenter", onOver);
    el.addEventListener("dragover", onOver);
    el.addEventListener("dragleave", (e) => {
      if (!el.contains(e.relatedTarget)) el.classList.remove("is-over");
    });
    el.addEventListener("drop", (e) => {
      e.preventDefault();
      e.stopPropagation();
      el.classList.remove("is-over");
      const files = e.dataTransfer?.files;
      if (files?.length) startUpload(files);
    });
  });
}

function bindHouse3d() {
  stopHouse3d();
  const scene = document.querySelector("[data-house3d]");
  if (!scene) return;
  applyHouse3dTransform();
  scene.onpointerdown = (e) => {
    if (e.target.closest("[data-action=open-device], [data-action=select-room], button, a, .house-hud, .house-chips, .house-toolbar")) return;
    house3d.dragging = true;
    house3d.moved = false;
    house3d.auto = false;
    house3d.lastX = e.clientX;
    house3d.lastY = e.clientY;
    scene.classList.add("is-dragging");
    try { scene.setPointerCapture(e.pointerId); } catch {}
    const spinBtn = document.querySelector("[data-action=house3d-auto]");
    if (spinBtn) spinBtn.textContent = "Spin";
  };
  scene.onpointermove = (e) => {
    if (!house3d.dragging) return;
    const dx = e.clientX - house3d.lastX;
    const dy = e.clientY - house3d.lastY;
    if (Math.abs(dx) + Math.abs(dy) > 3) house3d.moved = true;
    house3d.lastX = e.clientX;
    house3d.lastY = e.clientY;
    house3d.yaw += dx * 0.35;
    house3d.pitch = Math.min(78, Math.max(28, house3d.pitch - dy * 0.22));
    applyHouse3dTransform();
  };
  const endDrag = () => {
    house3d.dragging = false;
    scene.classList.remove("is-dragging");
  };
  scene.onpointerup = endDrag;
  scene.onpointercancel = endDrag;
  scene.onclick = (e) => {
    if (!house3d.moved) return;
    e.stopPropagation();
    house3d.moved = false;
  };
  const tick = () => {
    if (!document.getElementById("house3d-rig")) return;
    if (house3d.auto && !house3d.dragging) {
      house3d.yaw -= 0.08;
      applyHouse3dTransform();
    }
    house3d.raf = requestAnimationFrame(tick);
  };
  house3d.raf = requestAnimationFrame(tick);
}

let deviceDrag = { id: null, swallowClick: false, armed: false, moved: false, startX: 0, startY: 0, src: null, pointerId: null };

function deviceDragGhost() {
  let g = document.getElementById("device-drag-ghost");
  if (!g) {
    g = document.createElement("div");
    g.id = "device-drag-ghost";
    g.className = "device-drag-ghost";
    g.hidden = true;
    document.body.appendChild(g);
  }
  return g;
}

function showDeviceDragGhost(x, y, label) {
  const g = deviceDragGhost();
  g.hidden = false;
  g.innerHTML = `<strong>${esc(label || "Move device")}</strong><span>Drop on a room</span>`;
  g.style.left = `${x + 12}px`;
  g.style.top = `${y + 12}px`;
  document.body.classList.add("is-device-drag");
}

function hideDeviceDragGhost() {
  const g = document.getElementById("device-drag-ghost");
  if (g) g.hidden = true;
  document.body.classList.remove("is-device-drag");
}

function bindDeviceDrag() {
  document.querySelectorAll("[data-drag-device]").forEach((el) => {
    el.addEventListener("dragstart", (e) => e.preventDefault());
  });
}

function layoutViewToggle() {
  const list = isListLayout();
  return `
    <div class="layout-toggle" role="tablist" aria-label="Rooms layout">
      <button type="button" role="tab" aria-selected="${!list}" class="${list ? "" : "is-on"}" data-action="layout-view" data-value="3d">
        <img src="assets/rooms/icon-3d.svg" alt="" />
        3D
      </button>
      <button type="button" role="tab" aria-selected="${list}" class="${list ? "is-on" : ""}" data-action="layout-view" data-value="list">
        <img src="assets/icon-list.png" alt="" />
        List
      </button>
    </div>`;
}

function roomRowMenu(i) {
  const open = state.roomMenu === i;
  return `
    <div class="room-more" data-keep-menu>
      <button type="button" class="room-row__more" data-action="toggle-room-menu" data-index="${i}" aria-haspopup="menu" aria-expanded="${open ? "true" : "false"}" aria-label="Room options">
        <span class="rooms-more__dots" aria-hidden="true"><i></i><i></i><i></i></span>
      </button>
      ${open ? `
        <div class="rooms-menu room-row__menu" role="menu">
          <button type="button" role="menuitem" data-action="edit-room" data-index="${i}">Edit</button>
          <button type="button" role="menuitem" data-action="move-room" data-index="${i}">Move</button>
          <button type="button" role="menuitem" data-action="delete-room" data-index="${i}">Delete</button>
        </div>` : ""}
    </div>`;
}

function planViewToggle() {
  const is3d = state.planView !== "2d";
  return `
    <button type="button" class="plan-tools__btn ${is3d ? "is-on" : ""}" data-action="plan-view" data-value="${is3d ? "2d" : "3d"}" aria-pressed="${is3d ? "true" : "false"}" aria-label="${is3d ? "Switch to static floorplan" : "Switch to 3D floorplan"}">
      <img src="assets/rooms/btn-3d.png" alt="" />
    </button>`;
}

function plusBtn(action, label, attrs = "") {
  return `<button type="button" class="plus-btn" data-action="${esc(action)}" aria-label="${esc(label)}" ${attrs}>+</button>`;
}

function roomsActionBar() {
  const n = (state.selectedRooms || []).length;
  const canBulk = n > 0;
  const list = isListLayout();
  return `
    <div class="rooms-toolbar">
      <div class="rooms-toolbar__left">
        ${layoutViewToggle()}
        <label class="rooms-search">
          <input placeholder="Search by keyword" value="${esc(state.search)}" data-bind="search" />
          <img src="assets/icon-search.svg" alt="" />
        </label>
        <button type="button" class="rooms-filter" aria-label="Filter">
          <img src="assets/icon-filter.svg" alt="" />
        </button>
      </div>
      <div class="rooms-toolbar__btns">
        <input id="file-input" type="file" accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg" hidden multiple />
        <button type="button" class="btn btn--ghost" data-action="browse" data-coach="upload">Upload floorplan</button>
        <button type="button" class="btn btn--ghost ${state.deviceScan === "scanning" ? "is-busy" : ""}" data-action="sync-devices"${state.deviceScan === "scanning" ? " disabled" : ""}>
          ${state.deviceScan === "scanning" ? `<span class="btn__spin" aria-hidden="true"></span>` : ""}
          Sync devices
        </button>
        ${list && canBulk ? `
          <button type="button" class="btn btn--ghost" data-action="bulk-delete">Delete</button>
          <button type="button" class="btn btn--secondary" data-action="bulk-edit">Bulk edit</button>
          <button type="button" class="btn btn--secondary" data-action="bulk-move">Move</button>
        ` : !list ? `
          <div class="rooms-more-wrap" data-keep-menu>
            <button type="button" class="rooms-more" data-action="toggle-rooms-menu" aria-haspopup="menu" aria-expanded="${state.roomsMenu ? "true" : "false"}" aria-label="More options">
              <span class="rooms-more__dots" aria-hidden="true"><i></i><i></i><i></i></span>
            </button>
            ${state.roomsMenu ? `
              <div class="rooms-menu" role="menu">
                <button type="button" role="menuitem" data-action="show-diagnostics">Show diagnostics</button>
              </div>` : ""}
          </div>
        ` : ""}
      </div>
    </div>`;
}

function selectedRoomSet() {
  return new Set((state.selectedRooms || []).map(Number));
}

function visibleRoomIndexes(floor, q = (state.search || "").toLowerCase()) {
  return (floor?.rooms || [])
    .map((r, i) => ({ r, i }))
    .filter(({ r }) => !q || roomName(r).toLowerCase().includes(q))
    .map(({ i }) => i);
}

function syncSelectAll() {
  const all = document.getElementById("select-all-rooms");
  const floor = state.floors[state.selectedFloor];
  if (!all || !floor) return;
  const visible = visibleRoomIndexes(floor);
  const picked = selectedRoomSet();
  const n = visible.filter((i) => picked.has(i)).length;
  all.checked = visible.length > 0 && n === visible.length;
  all.indeterminate = n > 0 && n < visible.length;
}

function askConfirm(confirm) {
  setState({ modal: "confirm", confirm });
}

function confirmCopy() {
  const c = state.confirm || {};
  if (c.kind === "delete-rooms") {
    const n = (state.selectedRooms || []).length;
    return {
      title: "Are you sure?",
      body: `Delete ${n} room${n === 1 ? "" : "s"} from this floor? This can’t be undone.`,
      ok: n === 1 ? "Delete room" : "Delete rooms",
    };
  }
  if (c.kind === "delete-room") {
    const label = roomName(state.floors[state.selectedFloor]?.rooms?.[c.index]);
    return {
      title: "Are you sure?",
      body: `Delete ${label ? `“${label}”` : "this room"}? This can’t be undone.`,
      ok: "Delete room",
    };
  }
  if (c.kind === "delete-properties") {
    const n = (c.ids || state.selectedProperties || []).length;
    return {
      title: "Are you sure?",
      body: `Remove ${n} propert${n === 1 ? "y" : "ies"} from this book of business? Arc sales for those sites drop off the dashboard.`,
      ok: n === 1 ? "Delete property" : "Delete properties",
    };
  }
  if (c.kind === "unpair") {
    const d = findSheetDevice(state.selectedDevice);
    return {
      title: "Are you sure?",
      body: `Unpair ${d?.name ? `“${d.name}”` : "this device"} and remove it from this property? You can pair it again later.`,
      ok: "Unpair and remove",
    };
  }
  return { title: "Are you sure?", body: "This can’t be undone.", ok: "Continue" };
}

function confirmModal() {
  const copy = confirmCopy();
  return `
    <div class="overlay" data-action="close-modal">
      <div class="modal modal--confirm" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title">
        <div class="modal__top">
          <button type="button" class="modal__x" data-action="close-modal" aria-label="Close">×</button>
        </div>
        <div class="modal__body">
          <h2 id="confirm-title">${esc(copy.title)}</h2>
          <p>${esc(copy.body)}</p>
        </div>
        <div class="modal__cta">
          <button type="button" class="btn btn--secondary" data-action="close-modal">Cancel</button>
          <button type="button" class="btn btn--ghost" data-action="confirm-action">${esc(copy.ok)}</button>
        </div>
      </div>
    </div>`;
}

function sceneMembers(scene) {
  const rows = [];
  (scene.lights || []).forEach((item) => rows.push({
    kind: "light",
    group: "Lights",
    name: item.name,
    room: item.room || "Whole home",
    setting: item.level || "—",
  }));
  (scene.audio || []).forEach((item) => rows.push({
    kind: "audio",
    group: "Audio",
    name: item.name,
    room: item.room || "Whole home",
    setting: item.detail || "—",
  }));
  (scene.doors || []).forEach((item) => rows.push({
    kind: "lock",
    group: "Doors",
    name: item.name,
    room: item.room || "Entry",
    setting: item.locked ? "Locked" : "Unlocked",
  }));
  (scene.cameras || []).forEach((item) => rows.push({
    kind: "camera",
    group: "Cameras",
    name: item.name,
    room: item.room || "Whole home",
    setting: item.detail || "—",
  }));
  const listed = rows.map((row) => {
    const live = (state.devices || []).find((d) => d.name === row.name)
      || (state.devices || []).find((d) => d.room === row.room && d.kind === row.kind);
    return { ...row, live: live ? deviceView(live) : null, related: false };
  });
  const rooms = new Set(listed.map((m) => m.room).filter((r) => r && !/whole home|all floors/i.test(r)));
  (state.devices || []).forEach((d) => {
    if (!rooms.has(d.room) || listed.some((m) => m.name === d.name)) return;
    listed.push({
      kind: d.kind,
      group: DEVICE_GROUPS[d.kind] || "Devices",
      name: d.name,
      room: d.room,
      setting: "Follows room",
      live: deviceView(d),
      related: true,
    });
  });
  return listed;
}

function sceneDeviceConfig(row) {
  const d = row.live;
  const bits = [{ label: "Scene target", value: row.setting }];
  if (!d) return bits;
  bits.push({ label: "Live", value: d.on === false ? "Off" : "On" });
  if (d.kind === "light") {
    bits.push({ label: "Level", value: `${d.intensity ?? 0}%` });
    if (d.kelvin) bits.push({ label: "Color", value: `${d.kelvin}K` });
    if (d.fade) bits.push({ label: "Fade", value: d.fade });
  } else if (d.kind === "audio" || d.kind === "mic") {
    bits.push({ label: "Volume", value: d.muted ? "Muted" : `${d.volume ?? d.intensity ?? 0}%` });
    if (d.source) bits.push({ label: "Source", value: d.source });
  } else if (d.kind === "climate") {
    bits.push({ label: "Mode", value: d.hvacMode || "auto" });
    bits.push({ label: "Set to", value: `${d.targetTemp ?? 72}°` });
    bits.push({ label: "Fan", value: d.fan || "auto" });
  } else if (d.kind === "shade") {
    bits.push({ label: "Position", value: `${d.shadePos ?? d.intensity ?? 0}%` });
  } else if (d.kind === "fan") {
    bits.push({ label: "Speed", value: d.fan || `${d.intensity ?? 0}%` });
  }
  if (d.room) bits.push({ label: "Room", value: d.room });
  return bits;
}

function sceneChartSvg(scene, members) {
  const byRoom = new Map();
  members.forEach((m) => {
    const room = m.room || "Whole home";
    if (!byRoom.has(room)) byRoom.set(room, []);
    byRoom.get(room).push(m);
  });
  const rooms = [...byRoom.entries()];
  const colW = 168;
  const pad = 32;
  const w = Math.max(480, rooms.length * colW + pad * 2);
  const sceneY = 32;
  const roomY = 112;
  const deviceY0 = 196;
  const deviceGap = 48;
  const maxDevs = Math.max(1, ...rooms.map(([, list]) => list.length));
  const h = deviceY0 + maxDevs * deviceGap;
  const sceneX = w / 2;
  const roomX = (i) => pad + colW / 2 + i * colW;
  const node = (x, y, label, fill, stroke, color) => {
    const nw = 132;
    const nh = 34;
    return `<g>
      <rect x="${(x - nw / 2).toFixed(1)}" y="${(y - nh / 2).toFixed(1)}" width="${nw}" height="${nh}" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="1.5" />
      <text x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="middle" fill="${color}" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="600">${esc(label.length > 18 ? `${label.slice(0, 16)}…` : label)}</text>
    </g>`;
  };
  const curve = (x1, y1, x2, y2, color) =>
    `<path d="M${x1.toFixed(1)},${y1.toFixed(1)} C${x1.toFixed(1)},${((y1 + y2) / 2).toFixed(1)} ${x2.toFixed(1)},${((y1 + y2) / 2).toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}" fill="none" stroke="${color}" stroke-width="1.4" />`;
  const links = [];
  const roomNodes = rooms.map(([room, list], i) => {
    const x = roomX(i);
    links.push(curve(sceneX, sceneY + 17, x, roomY - 17, "rgba(0,213,140,0.45)"));
    const devices = list.map((m, di) => {
      const y = deviceY0 + di * deviceGap;
      links.push(curve(x, roomY + 17, x, y - 17, m.related ? "rgba(77,166,255,0.4)" : "rgba(255,255,255,0.18)"));
      return node(x, y, m.name, "#202020", m.related ? "#4da6ff" : "#404040", "#f2f2f2");
    }).join("");
    return node(x, roomY, room, "#283239", "#404040", "#ffffff") + devices;
  }).join("");
  return `
    <svg class="scene-chart__svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="Scene relationship chart">
      ${links.join("")}
      ${node(sceneX, sceneY, scene.name, "#00d58c", "#00d58c", "#121212")}
      ${roomNodes}
    </svg>`;
}

function sceneModal() {
  const scene = findScene(state.selectedScene);
  if (!scene) return "";
  const photo = scene.photo || SCENE_PHOTO;
  const members = sceneMembers(scene);
  const primary = members.filter((m) => !m.related);
  const related = members.filter((m) => m.related);
  return `
    <div class="overlay" data-action="close-modal">
      <div class="modal modal--scene" role="dialog" aria-modal="true" aria-labelledby="scene-title">
        <div class="modal__top">
          <h2 id="scene-title">${esc(scene.name)}</h2>
          <button type="button" class="modal__x" data-action="close-modal" aria-label="Close">×</button>
        </div>
        <div class="modal--scene__scroll">
        <div class="scene-sum__hero">
          <img src="${esc(photo)}" alt="" />
          <div>
            <p>${scene.on ? "Active now" : "Ready to run"}</p>
            <strong>${esc(scene.name)}</strong>
            <span>${primary.length} in scene${related.length ? ` · ${related.length} related in the same rooms` : ""}</span>
          </div>
        </div>
        <div class="scene-chart">
          <h3>Relationships</h3>
          <p>Scene → rooms → devices. Blue outlines follow the same room but are not in the scene recipe.</p>
          <div class="scene-chart__frame">${sceneChartSvg(scene, members)}</div>
        </div>
        <div class="modal__body modal__body--left scene-sum">
          <h3>Device configuration</h3>
          ${members.map((row) => `
            <article class="scene-device ${row.related ? "is-related" : ""}">
              <header>
                <div>
                  <strong>${esc(row.name)}</strong>
                  <em>${esc(row.group)} · ${esc(row.room)}${row.related ? " · related" : ""}</em>
                </div>
                ${row.live?.id ? `<button type="button" class="scene-device__open" data-action="open-device" data-id="${esc(row.live.id)}">Open</button>` : ""}
              </header>
              <dl>
                ${sceneDeviceConfig(row).map((bit) => `
                  <div>
                    <dt>${esc(bit.label)}</dt>
                    <dd>${esc(bit.value)}</dd>
                  </div>`).join("")}
              </dl>
            </article>`).join("")}
        </div>
        </div>
        <div class="modal__cta">
          <button type="button" class="btn btn--secondary" data-action="close-modal">Close</button>
          ${scene.on
            ? `<button type="button" class="btn btn--ghost" data-action="stop-scene" data-id="${esc(scene.id)}">Turn off</button>`
            : `<button type="button" class="btn btn--next" data-action="run-scene" data-id="${esc(scene.id)}">Run scene</button>`}
        </div>
      </div>
    </div>`;
}

function editDeviceNameModal() {
  const d = findSheetDevice(state.selectedDevice);
  if (!d) return "";
  return `
    <div class="overlay" data-action="close-modal">
      <div class="modal modal--device-name" role="dialog" aria-modal="true" aria-labelledby="device-name-title">
        <div class="modal__top">
          <h2 id="device-name-title">Edit device name</h2>
          <button type="button" class="modal__x" data-action="close-modal" aria-label="Close">×</button>
        </div>
        <div class="modal__body modal__body--left">
          <p>Give this device a name you’ll recognize on the floorplan and in rooms.</p>
          <label class="field">
            <span class="field__label">Device name</span>
            <input id="device-name-edit" value="${esc(d.name)}" placeholder="e.g. My Jemmi" />
          </label>
        </div>
        <div class="modal__cta">
          <button type="button" class="btn btn--secondary" data-action="close-modal">Cancel</button>
          <button type="button" class="btn btn--next" data-action="save-device-name">Save</button>
        </div>
      </div>
    </div>`;
}

function deleteRoomAt(index) {
  const floors = structuredClone(state.floors);
  const rooms = floors[state.selectedFloor]?.rooms;
  if (!rooms || index < 0 || index >= rooms.length) {
    setState({ modal: null, confirm: null });
    return;
  }
  const label = roomName(rooms[index]);
  rooms.splice(index, 1);
  const selectedRooms = (state.selectedRooms || []).filter((i) => i !== index).map((i) => (i > index ? i - 1 : i));
  const hereRoom = state.selectedFloor === state.hereFloor && index < state.hereRoom ? state.hereRoom - 1 : state.hereRoom;
  setState({
    floors,
    selectedRooms,
    selectedRoom: Math.min(state.selectedRoom, Math.max(0, rooms.length - 1)),
    ...clampPresence(floors, state.hereFloor, hereRoom),
    modal: null,
    confirm: null,
  });
  persistLayout();
  flashToast("Room removed", `${label || "Room"} was deleted.`);
}

function deleteSelectedRooms() {
  const picked = [...selectedRoomSet()].sort((a, b) => b - a);
  if (!picked.length) return;
  const floors = structuredClone(state.floors);
  const rooms = floors[state.selectedFloor]?.rooms;
  if (!rooms) return;
  picked.forEach((i) => rooms.splice(i, 1));
  const hereRoom = state.selectedFloor === state.hereFloor
    ? state.hereRoom - picked.filter((i) => i < state.hereRoom).length
    : state.hereRoom;
  setState({ floors, selectedRooms: [], selectedRoom: 0, ...clampPresence(floors, state.hereFloor, hereRoom), modal: null, confirm: null });
  persistLayout();
  flashToast("Rooms removed", `${picked.length} room${picked.length === 1 ? "" : "s"} deleted.`);
}

function unpairSelectedDevice() {
  const d = findSheetDevice(state.selectedDevice);
  if (!d) {
    setState({ modal: null, confirm: null });
    return;
  }
  const apply = (list) => (list || []).filter((x) => String(x.id) !== String(d.id));
  setState({
    devices: apply(state.devices),
    properties: liveProperties().map((p) => ({ ...p, devices: apply(p.devices) })),
    selectedDevice: null,
    deviceSnapshot: null,
    flashingDevice: null,
    modal: null,
    confirm: null,
  });
  if (state.loggedIn) persistSession();
  flashToast("Unpaired", `${d.name} was removed from this property.`);
}

function moveSelectedRooms(destIndex) {
  const dest = Number(destIndex);
  const picked = [...selectedRoomSet()].sort((a, b) => a - b);
  if (!picked.length) return;
  if (!Number.isFinite(dest) || dest === state.selectedFloor) {
    setState({ modal: null });
    flashToast("Already there", "Those rooms are already on this floor.");
    return;
  }
  const floors = structuredClone(state.floors);
  if (!floors[dest] || !floors[state.selectedFloor]) return;
  const moving = picked.map((i) => floors[state.selectedFloor].rooms[i]).filter(Boolean);
  [...picked].reverse().forEach((i) => floors[state.selectedFloor].rooms.splice(i, 1));
  floors[dest].rooms.push(...moving);
  setState({
    floors,
    selectedFloor: dest,
    selectedRoom: Math.max(0, floors[dest].rooms.length - moving.length),
    selectedRooms: [],
    modal: null,
  });
  persistLayout();
  flashToast("Rooms moved", `${moving.length} room${moving.length === 1 ? "" : "s"} moved to ${floors[dest].name}.`);
}

function bulkRenameSelected(base) {
  const name = String(base || "").trim();
  const picked = [...selectedRoomSet()].sort((a, b) => a - b);
  if (!picked.length) return;
  if (!name) {
    flashToast("Can’t update", "Enter a name for the selected rooms.", "error");
    return;
  }
  picked.forEach((i, n) => {
    renameRoomAt(i, picked.length === 1 ? name : `${name} ${n + 1}`);
  });
  setState({ modal: null });
  persistLayout();
  flashToast("Rooms updated", `${picked.length} room${picked.length === 1 ? "" : "s"} renamed.`);
}

function deviceIsAlert(d) {
  if (!d) return false;
  if (d.offline) return true;
  const diag = String(d.diagnostic || "").trim();
  return /offline|error|fault|fail/i.test(diag);
}

function deviceStatusLabel(d) {
  if (!d) return "Unknown";
  if (deviceIsAlert(d)) {
    const diag = String(d.diagnostic || "").trim();
    if (/offline|error|fault|fail/i.test(diag)) return diag;
    return d.offline ? "Offline" : "Error";
  }
  return d.on === false ? "Off" : (d.diagnostic || "Healthy");
}

function alertDevices(list = state.devices) {
  return list.filter(deviceIsAlert);
}

function assignDeviceRoom(id, destName) {
  const d = state.devices.find((x) => String(x.id) === String(id));
  const dest = String(destName || "").trim();
  if (!d || !dest || d.room === dest) return;
  let selectedFloor = state.selectedFloor;
  let selectedRoom = state.selectedRoom;
  state.floors.forEach((f, fi) => {
    (f.rooms || []).forEach((r, ri) => {
      if (roomName(r) === dest) {
        selectedFloor = fi;
        selectedRoom = ri;
      }
    });
  });
  const next = mutateDevice(id, { room: dest });
  setState({ ...next, selectedFloor, selectedRoom, roomsMenu: false });
  persistLayout();
  flashToast("Device moved", `${d.name} is now in ${dest}.`);
}

function roomHealth(name) {
  const ds = devicesInRoom(name);
  if (!ds.length) return { label: "No devices", level: "quiet" };
  if (ds.some(deviceIsAlert)) return { label: "Needs attention", level: "alert" };
  return { label: "Healthy", level: "ok" };
}

function deviceIsSelected(d) {
  return d && state.selectedDevice != null && String(state.selectedDevice) === String(d.id);
}

function devicePinButton(d, pos, _viewing = false, title = "") {
  const alert = deviceIsAlert(d);
  const off = d.on === false;
  const selected = deviceIsSelected(d);
  const status = deviceStatusLabel(d);
  return `<button type="button" class="device-pin ${alert ? "is-alert" : "is-ok"} ${off ? "is-off" : ""} ${selected ? "is-selected" : ""} ${state.flashingDevice === d.id ? "is-flashing" : ""}" style="left:${pos.x}%;top:${pos.y}%" data-drag-device="${esc(d.id)}" data-action="open-device" data-id="${esc(d.id)}" title="${esc(title || `${d.name} · ${status}`)}"><span class="device-pin__badge">${kindIconHtml(deviceIcon(d))}</span></button>`;
}

function planHereMarker(floor, floorIdx = state.selectedFloor) {
  if (Number(floorIdx) !== Number(state.hereFloor)) return "";
  const room = floor?.rooms?.[state.hereRoom];
  if (!room) return "";
  const label = roomName(room);
  const pos = planRoomPos(label);
  return `<div class="plan-here" style="left:${pos.x}%;top:${pos.y}%">${hereMark(label)}</div>`;
}

function planOverlayHtml(floor, selected = "", floorIdx = state.selectedFloor) {
  const pins = devicesOnFloor(floor);
  const byRoom = {};
  pins.forEach((d) => { (byRoom[d.room] ||= []).push(d); });
  const is3d = state.planView !== "2d";
  const src = floorPlanSrc(floor, is3d);
  return `
    <div class="plan-stage__map">
      <img class="plan-stage__img${is3d ? " plan-stage__img--cutaway" : ""}" src="${esc(src)}" alt="${esc(floor.name || "Floorplan")}" />
      ${pins.map((d) => {
        const pos = devicePlanPos(d, byRoom[d.room] || [d]);
        return devicePinButton(d, pos, false, `${d.name} · ${d.room}`);
      }).join("")}
      ${planHereMarker(floor, floorIdx)}
    </div>`;
}

function floorListHtml() {
  return `
    <div class="floor-list">
      <div class="col-head">
        <h3>Floors</h3>
      </div>
      <div class="floor-scroll">
        ${state.floors.map((f, i) => `
          <button class="floor-item ${i === state.selectedFloor ? "is-on" : ""}" data-action="select-floor" data-index="${i}">
            ${esc(f.name)}
            <img class="floor-item__chev" src="assets/nav/chevron.svg" alt="" />
          </button>
        `).join("")}
      </div>
    </div>`;
}

function roomDetailPanel(floor, room) {
  const name = room ? roomName(room) : "";
  const groups = name ? groupedDevices(name) : [];
  const close = state.layoutView === "table"
    ? `<button type="button" class="space-panel__close" data-action="close-table-peek" aria-label="Close room details"><img src="assets/nav/close.svg" alt="" /></button>`
    : "";
  return `
    <aside class="space-panel">
      <div class="space-panel__top">
        <input class="space-panel__title" value="${esc(name || "")}" placeholder="Select a room" data-room="${state.selectedRoom}" data-room-title aria-label="Selected room name" ${room ? "" : "disabled"} />
        ${close}
        <div class="view-toggle">
          <button type="button" class="${state.roomView === "list" ? "is-on" : ""}" data-action="room-view" data-value="list">
            <img src="assets/icon-list.png" alt="" />
            List
          </button>
          <button type="button" class="${state.roomView === "grid" ? "is-on" : ""}" data-action="room-view" data-value="grid">
            <img src="assets/icon-grid.png" alt="" />
            Grid
          </button>
        </div>
      </div>
      ${floorplanMedia(floor, room)}
      ${groups.length ? groups.map((g) => deviceOnOffSections(g, (d) => deviceCard(d, state.roomView), "device-section", state.roomView === "list" ? "device-list" : "device-tiles")).join("") : `<p class="muted-note">No devices in this space yet. They’ll appear here after Jemm Arc finishes scanning.</p>`}
    </aside>`;
}

function roomsColumnsBoard(floor, room, q) {
  return `
    <div class="rooms-board">
      <div class="rooms-board__nav">
        ${floorListHtml()}
        <div class="room-list">
          <div class="col-head">
            <h3>Rooms (${floor.rooms.length})</h3>
            <button type="button" class="plus-link" data-action="add-room" aria-label="Add room">+</button>
          </div>
          <div class="room-scroll">
            ${floor.rooms
              .map((r, i) => ({ r, i }))
              .filter(({ r }) => !q || roomName(r).toLowerCase().includes(q))
              .map(({ r, i }) => `
                <div class="room-row ${i === state.selectedRoom ? "is-on" : ""} ${state.roomMenu === i ? "is-menu" : ""}" data-action="select-room" data-index="${i}">
                  <div class="room-row__field">
                    <input value="${esc(roomName(r))}" data-room="${i}" aria-label="Room name" />
                  </div>
                  ${roomRowMenu(i)}
                </div>
              `).join("")}
          </div>
        </div>
      </div>
      ${roomDetailPanel(floor, room)}
    </div>`;
}

function roomsTableBoard(floor, room, q) {
  const peek = !!state.tablePeek && !!room;
  const rows = floor.rooms
    .map((r, i) => ({ r, i }))
    .filter(({ r }) => !q || roomName(r).toLowerCase().includes(q));
  return `
    <div class="rooms-board rooms-board--table ${peek ? "has-peek" : ""}">
      <div class="rooms-board__nav">
        ${floorListHtml()}
      </div>
      <div class="rooms-table">
        <div class="col-head">
          <h3>Rooms (${floor.rooms.length})</h3>
          <button type="button" class="plus-link" data-action="add-room" aria-label="Add room">+</button>
        </div>
        <div class="data-wrap rooms-table__wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Devices</th>
                <th>Status</th>
                <th>Floor</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${rows.map(({ r, i }) => {
                const label = roomName(r);
                const n = devicesInRoom(label).length;
                const health = roomHealth(label);
                return `
                  <tr class="data-table__row ${i === state.selectedRoom && peek ? "is-on" : ""} ${state.roomMenu === i ? "is-menu" : ""}" data-action="select-room" data-index="${i}">
                    <td>
                      <input class="rooms-table__name" value="${esc(label)}" data-room="${i}" aria-label="Room name" />
                    </td>
                    <td>${n}</td>
                    <td><span class="status-pill status-pill--${health.level}">${esc(health.label)}</span></td>
                    <td>${esc(floor.name)}</td>
                    <td>
                      ${roomRowMenu(i)}
                    </td>
                  </tr>`;
              }).join("")}
            </tbody>
          </table>
        </div>
        <p class="rooms-table__hint">Select a room to open its floorplan and devices.</p>
      </div>
      ${peek ? roomDetailPanel(floor, room) : ""}
    </div>`;
}

function houseDeviceCard(d) {
  const on = d.on !== false;
  const intensity = d.intensity ?? 70;
  const dots = Math.round(intensity / 100 * 12);
  return `
    <article class="hdevice">
      <div class="hdevice__row">
        <button type="button" class="hdevice__icon" data-action="open-device" data-id="${esc(d.id)}" aria-label="${esc(d.name)} details">
          ${kindIconHtml(deviceIcon(d))}
        </button>
        <div class="hdevice__copy">
          <strong>${esc(d.name)}</strong>
          <em>${esc(DEVICE_GROUPS[d.kind] || "Device")} · ${on ? "On" : "Off"}</em>
        </div>
        <button type="button" class="htoggle ${on ? "is-on" : ""}" data-action="device-on" data-id="${esc(d.id)}" data-value="${on ? "false" : "true"}" aria-label="${on ? "Turn off" : "Turn on"} ${esc(d.name)}"></button>
      </div>
      ${d.kind === "light" || d.kind === "climate" || d.kind === "shade" ? `
        <div class="hdots" aria-hidden="true">${Array.from({ length: 12 }, (_, i) => `<i class="${i < dots ? "is-on" : ""}"></i>`).join("")}</div>
        <span class="hdevice__pct">${intensity}%</span>
      ` : ""}
    </article>`;
}

function roomsHouse3dBoard() {
  const floor = state.floors[state.selectedFloor];
  const room = floor?.rooms?.[state.selectedRoom];
  const selected = room ? roomName(room) : "";
  const devices = selected ? devicesInRoom(selected) : [];
  const online = state.devices.filter((d) => d.on !== false).length;
  const levels = state.floors.map((f, fi) => {
    const pins = devicesOnFloor(f);
    const byRoom = {};
    pins.forEach((d) => { (byRoom[d.room] ||= []).push(d); });
    return `
      <div class="house3d__level ${fi === state.selectedFloor ? "is-on" : ""}" style="--level:${fi};--level-gap:${state.floors.length > 3 ? -70 : state.floors.length > 2 ? -96 : -132}px" data-action="select-floor" data-index="${fi}">
        <span class="house3d__slab" aria-hidden="true"></span>
        ${f.plan ? `
        <div class="house3d__map">
          <div class="plan-stage__map">
            <img class="house3d__plan" src="${esc(f.plan)}" alt="${esc(f.name)}" />
            ${pins.map((d) => {
              const pos = devicePlanPos(d, byRoom[d.room] || [d]);
              return devicePinButton(d, pos, false, `${d.name} · ${d.room}`);
            }).join("")}
            ${planHereMarker(f, fi)}
          </div>
        </div>` : planHereMarker(f, fi)}
        <span class="house3d__tag">${esc(f.name)}</span>
      </div>`;
  }).join("");
  const chips = (floor?.rooms || []).map((r, i) => {
    const label = roomName(r);
    const pos = ROOM_PLAN_POS[label] || hashedPlanPos(label);
    const n = devicesInRoom(label).length;
    return `
      <button type="button" class="house-chip ${i === state.selectedRoom ? "is-on" : ""} ${isHereRoom(state.selectedFloor, i) ? "is-here" : ""} ${roomHealth(label).level === "alert" ? "is-alert" : ""}" style="left:${pos.x}%;top:${Math.max(8, pos.y - 8)}%" data-action="select-room" data-index="${i}" data-drop-room="${esc(label)}">
        ${isHereRoom(state.selectedFloor, i) ? hereMark(label) : ""}
        <strong>${esc(label)}</strong>
        <span>${n} device${n === 1 ? "" : "s"}</span>
      </button>`;
  }).join("");
  const photo = roomPhoto(room, floor);
  const scenes = propertyScenes();
  const owner = propertyOwner(state.property);
  return `
    <div class="house-dash">
      <nav class="house-rail" aria-label="Rooms">
        <button type="button" class="house-rail__home ${state.selectedRoom === 0 && state.selectedFloor === 0 ? "is-on" : ""}" data-action="select-floor" data-index="0" aria-label="Whole home">
          <img src="assets/nav/badge-home.svg" alt="" />
        </button>
        ${state.floors.map((f, i) => `
          <button type="button" class="house-rail__floor ${i === state.selectedFloor ? "is-on" : ""}" data-action="select-floor" data-index="${i}" title="${esc(f.name)}">${i + 1}</button>
        `).join("")}
        <span class="house-rail__rule" aria-hidden="true"></span>
        ${(floor?.rooms || []).map((r, i) => `
          <button type="button" class="house-rail__room ${i === state.selectedRoom ? "is-on" : ""}" data-action="select-room" data-index="${i}" title="${esc(roomName(r))}">${esc(roomName(r).slice(0, 1))}</button>
        `).join("")}
      </nav>
      <div class="house-stage">
        <div class="house3d__scene" data-house3d style="--floors:${state.floors.length}">
          <div class="house-hud">
            <div class="glass-stat">
              <span>Jemm Arc</span>
              <strong>${state.arcStatus === "online" ? "Online" : "Offline"}</strong>
            </div>
            <div class="glass-stat">
              <span>Devices</span>
              <strong>${online}/${state.devices.length} on</strong>
            </div>
            <div class="glass-stat">
              <span>Now viewing</span>
              <strong>${esc(selected || floor?.name || "Home")}</strong>
            </div>
          </div>
          <div class="house3d__rig" id="house3d-rig">${levels}</div>
          <div class="house-chips">${chips}</div>
          <div class="house-toolbar">
            <button type="button" class="glass-btn" data-action="house3d-auto">${house3d.auto ? "Pause" : "Spin"}</button>
            <button type="button" class="glass-btn" data-action="house3d-reset">Reset</button>
          </div>
        </div>
        <div class="house-scenes">
          ${scenes.map((s) => `
            <button type="button" class="house-scene ${s.on ? "is-on" : ""}" data-action="open-scene" data-id="${esc(s.id)}">
              <strong>${esc(s.name)}</strong>
              <span>${s.on ? "Active" : "Ready"}</span>
            </button>`).join("")}
        </div>
        <div class="house-presence">
          <div class="house-person">
            <img src="assets/nav/avatar.png" alt="" />
            <div>
              <strong>${esc(owner)}</strong>
              <span>On site</span>
            </div>
          </div>
        </div>
      </div>
      <aside class="house-peek">
        <header class="house-peek__head">
          <div>
            <p>Room</p>
            <h3>${esc(selected || "Select a room")}</h3>
          </div>
          <span class="house-peek__area">${devices.length} device${devices.length === 1 ? "" : "s"}</span>
        </header>
        ${photo ? `<div class="house-peek__photo"><img src="${photo}" alt="${esc(selected)}" /></div>` : ""}
        <div class="house-peek__list">
          ${devices.length ? devices.map(houseDeviceCard).join("") : `<p class="muted-note">No devices in this room yet.</p>`}
        </div>
      </aside>
    </div>`;
}

function deviceRailRow(d) {
  const icon = deviceIcon(d);
  const alert = deviceIsAlert(d);
  return `
    <button type="button" class="device-rail__row ${alert ? "is-alert" : "is-ok"} ${String(state.selectedDevice) === String(d.id) ? "is-on" : ""} ${state.flashingDevice === d.id ? "is-flashing" : ""}" data-drag-device="${esc(d.id)}" data-action="open-device" data-id="${esc(d.id)}" title="Drag to another room">
      <span class="device-rail__status ${alert ? "is-alert" : "is-ok"}" aria-hidden="true"></span>
      ${kindIconHtml(icon, "device-rail__icon")}
      <span class="device-rail__copy">
        <strong>${esc(d.name)}</strong>
        ${alert ? `<em>${esc(deviceStatusLabel(d))}</em>` : ""}
      </span>
      <img class="device-rail__chev" src="assets/nav/chevron.svg" alt="" />
    </button>`;
}

function floorHasPlan(floor) {
  return !!(floor && floor.plan);
}

const CUTAWAY_3D = "assets/rooms/cutaway-3d.png";

function floorPlanSrc(floor, is3d = false) {
  const plan = floor?.plan || "";
  if (!is3d) return plan;
  if (floor?.plan3d) return floor.plan3d;
  if (/(?:floorplan-[12]|rooms\/cutaway-3d)\.png$/.test(plan)) return CUTAWAY_3D;
  return plan;
}

function floorplanDropHtml() {
  return `
    <div class="drop drop--plan" data-plan-drop data-coach="upload">
      <div class="empty empty--plan">
        <img src="assets/rooms/icon-3d.svg" alt="" />
        <h3>No floorplan yet</h3>
        <p>Use the ‘Upload floorplan’ button to start adding and configuring this floor.</p>
        <button type="button" class="btn btn--ghost" data-action="browse">Upload floorplan</button>
      </div>
    </div>`;
}

function roomsEmptyHtml() {
  return `
    <div class="empty empty--rooms">
      <img src="assets/ill-house.svg" alt="" />
      <h3>No rooms yet</h3>
      <p>Use the ‘Add floor’ button to start adding and configuring floors.</p>
      <button type="button" class="btn btn--ghost" data-action="add-floor-quick" data-coach="add-floors">Add floor</button>
    </div>`;
}

function roomsFloorplan(floor, room) {
  const selected = roomName(room);
  const head = `
      <div class="rooms-plan__head">
        ${roomsPlanTitleHtml(room, floor)}
        <div class="plan-weather" title="Local weather">
          <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="3.1" fill="currentColor"/><g stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M8 1.2v1.6M8 13.2v1.6M1.2 8h1.6M13.2 8h1.6M3.1 3.1l1.1 1.1M11.8 11.8l1.1 1.1M3.1 12.9l1.1-1.1M11.8 4.2l1.1-1.1"/></g></svg>
          <span>84 °F • Sunny</span>
        </div>
      </div>`;
  if (!floorHasPlan(floor)) {
    return `
    <div class="rooms-plan">
      ${head}
      <div class="rooms-plan__frame rooms-plan__frame--empty" data-coach="floorplan">
        ${floorplanDropHtml()}
      </div>
    </div>`;
  }
  const is3d = state.planView !== "2d";
  return `
    <div class="rooms-plan">
      ${head}
      <div class="rooms-plan__frame ${is3d ? "is-3d" : ""}" data-coach="floorplan">
        <div class="plan-stage">
          ${planOverlayHtml(floor, selected)}
        </div>
        <div class="plan-tools">
          ${planViewToggle()}
        </div>
      </div>
    </div>`;
}

function roomsSidePanel(floor, room) {
  const name = room ? roomName(room) : "";
  const issues = alertDevices();
  return `
    <aside class="device-rail">
      <div class="device-rail__head">
        <h3>Devices</h3>
        <button type="button" class="plus-btn" data-action="open-add-device" data-coach="add-device" aria-label="Add device">+</button>
      </div>
      <div class="device-rail__body" data-coach="drag">
        ${railDeviceGroups(name).map(deviceRailGroup).join("")}
      </div>
      <button type="button" class="device-rail__foot" data-action="show-diagnostics">
        <span>Show diagnostics</span>
        ${issues.length ? `<em>${issues.length}</em>` : ""}
      </button>
    </aside>`;
}

function roomsScenesStrip() {
  const scenes = propertyScenes();
  return `
    <div class="rooms-scenes" data-coach="scenes">
      <h3>Scenes (${scenes.length})</h3>
      <div class="rooms-scenes__row">
        ${scenes.map((s) => `
          <button type="button" class="scene-tile ${s.on ? "is-on" : ""}" data-action="open-scene" data-id="${esc(s.id)}">
            <img src="${esc(s.photo || SCENE_PHOTO)}" alt="" />
            <span>${esc(s.name)}</span>
          </button>`).join("")}
      </div>
    </div>`;
}

function roomsListCenter(floor, q) {
  const rows = floor.rooms
    .map((r, i) => ({ r, i }))
    .filter(({ r }) => !q || roomName(r).toLowerCase().includes(q));
  const picked = selectedRoomSet();
  const visible = rows.map(({ i }) => i);
  const selectedCount = visible.filter((i) => picked.has(i)).length;
  const allOn = visible.length > 0 && selectedCount === visible.length;
  return `
    <div class="rooms-plan rooms-plan--list" data-coach="floorplan">
      <div class="rooms-plan__head">
        <div>
          <h2>Rooms</h2>
          <p>${floor.rooms.length} on this floor${selectedCount ? ` · ${selectedCount} selected` : ""}</p>
        </div>
        ${plusBtn("add-room", "Add room", `data-coach="add-rooms"`)}
      </div>
      <div class="rooms-table__wrap data-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th class="data-table__check">
                <input class="check" type="checkbox" id="select-all-rooms" data-action="toggle-select-all" aria-label="Select all rooms" ${allOn ? "checked" : ""} />
              </th>
              <th>Name</th>
              <th>Devices</th>
              <th>Status</th>
              <th>Floor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${rows.map(({ r, i }) => {
              const label = roomName(r);
              const n = devicesInRoom(label).length;
              const health = roomHealth(label);
              const on = picked.has(i);
              const here = i === state.selectedRoom;
              return `
                <tr class="data-table__row ${here ? "is-on" : ""} ${isHereRoom(state.selectedFloor, i) ? "is-here" : ""} ${on ? "is-checked" : ""} ${health.level === "alert" ? "is-alert" : ""} ${state.roomMenu === i ? "is-menu" : ""}" data-action="select-room" data-index="${i}" data-drop-room="${esc(label)}">
                  <td class="data-table__check">
                    <input class="check" type="checkbox" data-action="toggle-room-check" data-index="${i}" ${on ? "checked" : ""} aria-label="Select ${esc(label)}" />
                  </td>
                  <td>
                    <div class="rooms-table__who">
                      ${tableRoomNameHtml(i, label)}
                      ${isHereRoom(state.selectedFloor, i) ? hereMark(label) : ""}
                    </div>
                  </td>
                  <td>${n}</td>
                  <td><span class="status-pill status-pill--${health.level}">${esc(health.label)}</span></td>
                  <td>${esc(floor.name)}</td>
                  <td>
                    ${roomRowMenu(i)}
                  </td>
                </tr>`;
            }).join("")}
          </tbody>
        </table>
      </div>
      ${roomSuggestHtml()}
    </div>`;
}

function roomsPlanBoard(floor, room, q) {
  const list = isListLayout();
  return `
    <div class="rooms-board rooms-board--wire ${list ? "rooms-board--list" : ""}">
      <aside class="floors-rail">
        <div class="floors-rail__head">
          <span class="floors-rail__icon"><img src="assets/rooms/icon-floors-header.svg" alt="" /></span>
          <h3>Floors</h3>
        </div>
        ${plusBtn("add-floor", "Add floor", `data-coach="add-floors"`)}
        <div class="floors-rail__list">
          ${state.floors.map((f, i) => ({ f, i })).reverse().map(({ i }) => `
            <button type="button" class="floor-pill ${i === state.selectedFloor ? "is-on" : ""}" data-action="select-floor" data-index="${i}">
              ${i + 1}${ordinal(i + 1)}
            </button>
          `).join("")}
        </div>
      </aside>
      ${list ? "" : `
      <aside class="room-list">
        <div class="col-head">
          <h3>Rooms (${floor.rooms.length})</h3>
          ${plusBtn("add-room", "Add room", `data-coach="add-rooms"`)}
        </div>
        <div class="room-scroll">
          ${floor.rooms
            .map((r, i) => ({ r, i }))
            .filter(({ r }) => !q || roomName(r).toLowerCase().includes(q))
            .map(({ r, i }) => {
              const label = roomName(r);
              const health = roomHealth(label);
              return `
              <div class="room-row ${i === state.selectedRoom ? "is-on" : ""} ${isHereRoom(state.selectedFloor, i) ? "is-here" : ""} ${health.level === "alert" ? "is-alert" : ""} ${state.roomMenu === i ? "is-menu" : ""}" data-action="select-room" data-index="${i}" data-drop-room="${esc(label)}">
                ${roomRowNameHtml(i, label)}
                ${isHereRoom(state.selectedFloor, i) ? hereMark(label) : ""}
                <span class="device-rail__status ${health.level === "alert" ? "is-alert" : health.level === "ok" ? "is-ok" : "is-quiet"}" aria-hidden="true"></span>
                ${roomRowMenu(i)}
              </div>
            `;
            }).join("")}
          ${roomSuggestHtml()}
        </div>
      </aside>`}
      <section class="rooms-main">
        ${list ? roomsListCenter(floor, q) : roomsFloorplan(floor, room)}
      </section>
      ${roomsSidePanel(floor, room)}
    </div>`;
}

function roomsWorkspace(floor, room, q) {
  return roomsPlanBoard(floor, room, q);
}

function roomSuggestHtml() {
  const pending = pendingSuggestions();
  if (!pending.length || state.reviewing) return "";
  return `
    <div class="room-suggest" data-coach="suggest">
      <p>Suggested by Jemm</p>
      ${pending.map((name) => `
        <button type="button" class="room-suggest__chip" data-action="accept-suggest" data-name="${esc(name)}">
          <img src="assets/jemm-mark.svg" alt="" />
          <span>${esc(name)}</span>
        </button>
      `).join("")}
    </div>`;
}

function floorplanMedia(floor, room) {
  if (!floorHasPlan(floor)) {
    return `<div class="space-panel__media space-panel__media--empty">${floorplanDropHtml()}</div>`;
  }
  const is3d = state.planView !== "2d";
  const selected = roomName(room);
  return `
    <div class="space-panel__media ${is3d ? "is-3d" : ""}">
      <div class="plan-stage">
        ${planOverlayHtml(floor, selected)}
      </div>
      <div class="plan-tools">
        ${planViewToggle()}
      </div>
    </div>
  `;
}

function roomPhoto(room, floor) {
  if (room && room.photo) return room.photo;
  const name = roomName(room);
  if (name === "Living Room") return "assets/room-living.png";
  if (name === "Tech Closet") return "assets/step-ethernet.png";
  return floor.plan;
}

function allRooms() {
  return state.floors.flatMap((f) => f.rooms.map(roomName));
}

function devicesInRoom(name) {
  return state.devices.filter((d) => d.room === name);
}

function groupedDevices(name) {
  return groupDeviceList(devicesInRoom(name));
}

function groupDeviceList(list) {
  const buckets = {};
  (list || []).forEach((d) => {
    const label = DEVICE_GROUPS[d.kind] || "Devices";
    const g = buckets[label] ||= { label, on: [], off: [] };
    (d.on !== false ? g.on : g.off).push(d);
  });
  const extra = Object.keys(buckets).filter((k) => !DEVICE_GROUP_ORDER.includes(k));
  return [...DEVICE_GROUP_ORDER, ...extra].filter((k) => buckets[k]).map((k) => buckets[k]);
}

function railDeviceGroups(name) {
  const found = {};
  groupDeviceList(name ? devicesInRoom(name) : []).forEach((g) => { found[g.label] = g; });
  return DEVICE_GROUP_ORDER.map((label) => found[label] || { label, on: [], off: [] });
}

function deviceGroupOpen(label) {
  const stored = state.deviceAccord && state.deviceAccord[label];
  if (typeof stored === "boolean") return stored;
  return true;
}

function deviceOnOffBody(group, renderRow, rowsClass = "device-rail__rows") {
  const blocks = [["On", group.on], ["Off", group.off]].filter(([, items]) => items.length);
  return blocks.map(([stateLabel, items]) => `
        <div class="device-rail__state-block">
          <p class="device-rail__state">${esc(stateLabel)}</p>
          <div class="${rowsClass}">${items.map(renderRow).join("")}</div>
        </div>
      `).join("");
}

function deviceOnOffSections(group, renderRow, sectionClass = "device-rail__group", rowsClass = "device-rail__rows") {
  return `
    <section class="${sectionClass}">
      <h4>${esc(group.label)} <img src="assets/nav/chevron.svg" alt="" /></h4>
      ${deviceOnOffBody(group, renderRow, rowsClass)}
    </section>`;
}

function deviceRailGroup(group) {
  const items = [...group.on, ...group.off];
  const open = deviceGroupOpen(group.label);
  return `
    <section class="device-rail__group ${open ? "is-open" : "is-closed"}">
      <div class="device-rail__group-bar">
        <button type="button" class="device-rail__group-toggle" data-action="toggle-device-group" data-group="${esc(group.label)}" aria-expanded="${open}">
          <span>${esc(group.label)}</span>
          <img class="device-rail__group-chev" src="assets/nav/chevron.svg" alt="" />
        </button>
      </div>
      ${open && items.length ? `
      <div class="device-rail__group-body">
        ${deviceOnOffBody(group, deviceRailRow)}
      </div>` : ""}
    </section>`;
}

function seedCompletedProperty() {
  const examples = exampleProperties();
  const home = examples[0];
  state = {
    ...blankState(),
    screen: "dashboard",
    loggedIn: true,
    account: {
      first: "John",
      last: "Doe",
      email: "john@apexsmart.home",
      company: "Apex Smart Home Solutions",
      license: "LIC-48291",
      password: "password",
      confirm: "password",
    },
    property: structuredClone(home.details),
    floors: cloneFloors(home.floors),
    devices: cloneDevices(home.devices),
    arcStatus: "online",
    deviceScan: "found",
    properties: examples,
    draft: loadDraft(),
  };
  const presence = defaultPresence(state.floors);
  state.hereFloor = presence.hereFloor;
  state.hereRoom = presence.hereRoom;
  persistSession();
  render();
}

function snapshotDraft() {
  return {
    screen: state.screen,
    account: structuredClone(state.account),
    property: structuredClone(state.property),
    floors: structuredClone(state.floors),
    devices: structuredClone(state.devices),
    arcStatus: state.arcStatus,
    deviceScan: state.deviceScan,
    selectedFloor: state.selectedFloor,
    selectedRoom: state.selectedRoom,
    addingProperty: state.addingProperty,
    savedAt: Date.now(),
  };
}

function saveDraftAndLeave() {
  const draft = snapshotDraft();
  localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  const account = structuredClone(state.account);
  const properties = structuredClone(state.properties);
  clearTimers();
  state = {
    ...blankState(),
    screen: "dashboard",
    loggedIn: true,
    account,
    properties,
    draft,
    toast: "Draft saved. Resume anytime from the dashboard.",
    toastTitle: "Saved as draft",
    toastKind: "success",
  };
  persistSession();
  render();
  later(() => {
    if (state.toast) setState({ toast: null, toastTitle: null, toastKind: null });
  }, 5200);
}

function resumeDraft() {
  const draft = state.draft || loadDraft();
  if (!draft) return;
  clearTimers();
  const properties = structuredClone(state.properties);
  const account = structuredClone(state.account);
  state = {
    ...blankState(),
    ...draft,
    properties,
    account: draft.account || account,
    draft,
    loggedIn: true,
    modal: null,
    toast: null,
    selectedDevice: null,
  };
  lastScreen = null;
  persistSession();
  render();
}

function finishSetup() {
  localStorage.removeItem(DRAFT_KEY);
  const record = {
    id: "p-" + Date.now(),
    status: "live",
    details: structuredClone(state.property),
    floors: structuredClone(state.floors),
    devices: structuredClone(state.devices),
    arcStatus: state.arcStatus,
  };
  const name = record.details.name || "New property";
  const properties = liveProperties().filter((p) => (p.details?.name || p.name) !== name);
  properties.push(record);
  const added = state.addingProperty;
  state = {
    ...state,
    screen: added ? "dashboard" : "done",
    draft: null,
    loggedIn: true,
    addingProperty: false,
    reviewing: false,
    properties,
    toast: added ? `${name} is live on the portal.` : state.toast,
    toastTitle: added ? "Property added" : state.toastTitle,
    toastKind: added ? "success" : state.toastKind,
  };
  persistSession();
  render();
  if (added) {
    later(() => {
      if (state.toast) setState({ toast: null, toastTitle: null, toastKind: null });
    }, 4200);
  }
}

function startUpload(files) {
  const list = files ? [...files] : [];
  const cad = list.some((f) => isCadFile(f.name));
  const image = list.find((f) => isPlanImage(f.name));
  state.uploadPlan = null;
  if (image) {
    const reader = new FileReader();
    reader.onload = () => { state.uploadPlan = reader.result; };
    reader.readAsDataURL(image);
  }
  setState({ modal: "upload", uploadPct: 0, uploadCad: cad });
  const tick = () => {
    if (state.modal !== "upload") return;
    const next = Math.min(100, state.uploadPct + Math.round(8 + Math.random() * 14));
    setState({ uploadPct: next });
    if (next < 100) later(tick, 220);
  };
  later(tick, 200);
}

function confirmUpload() {
  if (state.uploadPct < 100) {
    flashToast("Still uploading", "Wait for the floorplans to finish, then confirm.", "error");
    return;
  }
  const plan = state.uploadPlan || "";
  const cad = !!state.uploadCad;
  const guiding = (isOnboarding() || state.addingProperty) && !state.reviewing;
  const toast = cad
    ? ["3D model ready", "CAD imported as a 3D layout. Suggested rooms are ready to add."]
    : ["Floorplan added", "Flat floorplan added. Suggested rooms are ready to add."];

  if (state.floors.length) {
    const floors = structuredClone(state.floors);
    const i = Math.min(Math.max(0, state.selectedFloor), floors.length - 1);
    floors[i] = { ...floors[i], plan: plan || floors[i].plan || "", cad };
    const patch = {
      modal: null,
      floors,
      selectedFloor: i,
      planView: cad ? "3d" : "2d",
      layoutView: "3d",
      uploadCad: false,
      uploadPlan: null,
    };
    if (guiding && (!floors[i].rooms || !floors[i].rooms.length)) {
      const suggested = suggestedRoomsForProperty();
      floors[i].rooms = suggested.slice(0, 2).map((name) => ({ name }));
      patch.suggestions = suggested.slice(2);
      patch.selectedRoom = 0;
      patch.coach = "suggest";
    } else if (guiding && state.coach === "upload") {
      patch.coach = "suggest";
    }
    setState(patch);
    persistLayout();
    flashToast(toast[0], guiding ? toast[1] : `${floors.length} floor${floors.length === 1 ? "" : "s"} updated.`);
    return;
  }

  const suggested = suggestedRoomsForProperty();
  const detected = guiding ? suggested.slice(0, 2) : [];
  const leftover = guiding ? suggested.slice(2) : [];
  const floors = [{
    id: "f" + Date.now(),
    name: "1st floor",
    plan,
    cad,
    rooms: detected.map((name) => ({ name })),
  }];
  setState({
    modal: null,
    floors,
    devices: guiding ? [] : seedDevices(DEMO_DEVICES),
    selectedFloor: 0,
    selectedRoom: 0,
    planView: cad ? "3d" : "2d",
    layoutView: "3d",
    coach: guiding ? "suggest" : state.coach,
    suggestions: leftover,
    roomPanel: "devices",
    uploadCad: false,
    uploadPlan: null,
    deviceScan: guiding ? "idle" : state.deviceScan,
  });
  persistLayout();
  flashToast(toast[0], guiding ? toast[1] : "Floorplan added to this property.");
}

function addFloor(name) {
  const n = String(name || "").trim() || `${state.floors.length + 1}${ordinal(state.floors.length + 1)} floor`;
  const floors = [
    ...state.floors,
    { id: "f" + Date.now(), name: n, plan: "", cad: false, rooms: [{ name: "New room" }] },
  ];
  const patch = { floors, selectedFloor: floors.length - 1, selectedRoom: 0, modal: null };
  if (state.coach === "upload") {
    const have = new Set(floors.flatMap((f) => (f.rooms || []).map(roomName)).map((x) => x.toLowerCase()));
    patch.coach = "suggest";
    patch.suggestions = suggestedRoomsForProperty().filter((x) => !have.has(x.toLowerCase()));
  }
  setState(patch);
  persistLayout();
  flashToast("Floor added", `${n} is on the layout.`);
}

function addRoom() {
  if (!state.floors.length) {
    addFloor("");
    return;
  }
  const floors = structuredClone(state.floors);
  floors[state.selectedFloor].rooms.push({ name: "New room" });
  const idx = floors[state.selectedFloor].rooms.length - 1;
  setState({
    floors,
    selectedRoom: idx,
    editingRoom: idx,
    tablePeek: state.layoutView === "table",
  });
  persistLayout();
  roomRenameFocus = "row";
  focusRoomRename(idx, "row");
}

function acceptSuggestion(name) {
  const label = String(name || "").trim();
  if (!label) return;
  let floors = structuredClone(state.floors);
  if (!floors.length) {
    floors = [{ id: "f" + Date.now(), name: "1st floor", plan: "", cad: false, rooms: [] }];
  }
  const i = state.selectedFloor < floors.length ? state.selectedFloor : 0;
  if (!floors[i].rooms.some((r) => roomName(r).toLowerCase() === label.toLowerCase())) {
    floors[i].rooms.push({ name: label });
  }
  const suggestions = pendingSuggestions().filter((n) => n.toLowerCase() !== label.toLowerCase());
  setState({
    floors,
    suggestions,
    selectedFloor: i,
    selectedRoom: floors[i].rooms.length - 1,
  });
  persistLayout();
}

function coachCopy() {
  const copy = COACH[state.coach] || null;
  if (!copy) return null;
  if (state.coach === "sync" && state.modal && copy.modalTitle) {
    return { ...copy, title: copy.modalTitle, text: copy.modalText, cta: "Next" };
  }
  return copy;
}

function coachStepVisible(step, devices = state.devices) {
  if (step === "suggest" && !pendingSuggestions().length) return false;
  if ((step === "add-rooms" || step === "floorplan" || step === "add-device") && !(state.floors || []).length) return false;
  if (step === "drag" && !(devices || []).length) return false;
  return true;
}

function coachVisibleSteps(devices = state.devices) {
  return COACH_STEPS.filter((step) => coachStepVisible(step, devices));
}

function coachIndex() {
  const visible = coachVisibleSteps();
  const i = visible.indexOf(state.coach);
  return i < 0 ? 0 : i;
}

function nextCoachAfter(step, devices = state.devices) {
  let i = COACH_STEPS.indexOf(step) + 1;
  while (i < COACH_STEPS.length) {
    const n = COACH_STEPS[i];
    if (!coachStepVisible(n, devices)) { i += 1; continue; }
    return n;
  }
  return "done";
}

function prevCoachBefore(step, devices = state.devices) {
  let i = COACH_STEPS.indexOf(step) - 1;
  while (i >= 0) {
    const n = COACH_STEPS[i];
    if (!coachStepVisible(n, devices)) { i -= 1; continue; }
    return n;
  }
  return null;
}

function coachTarget(step) {
  return document.querySelector(`[data-coach="${step}"]`)
    || (step === "suggest" && (document.querySelector(".room-suggest") || document.querySelector(".room-list")))
    || (step === "floorplan" && document.querySelector(".rooms-plan"))
    || (step === "upload" && document.querySelector("[data-action=browse]"))
    || (step === "add-floors" && (document.querySelector("[data-action=add-floor]") || document.querySelector("[data-action=add-floor-quick]")))
    || (step === "add-rooms" && document.querySelector("[data-action=add-room]"))
    || (step === "add-device" && document.querySelector("[data-action=open-add-device]"))
    || (step === "sync" && (document.querySelector("[data-action=start-arc-scan]") || document.querySelector("[data-action=sync-devices]")))
    || (step === "drag" && (document.querySelector("[data-drag-device]") || document.querySelector(".device-rail")))
    || null;
}

function positionCoach() {
  const tip = document.getElementById("coach-tip");
  document.querySelectorAll(".is-coach").forEach((el) => el.classList.remove("is-coach"));
  if (!roomsGuiding() || !tip) return;
  if (state.modal && state.coach !== "sync") return;
  const target = coachTarget(state.coach);
  if (!target) return;
  target.classList.add("is-coach");
  const visible = (() => {
    const r = target.getBoundingClientRect();
    return r.bottom > 80 && r.top < window.innerHeight - 80;
  })();
  if (!visible) target.scrollIntoView({ block: "nearest", inline: "nearest" });
  requestAnimationFrame(() => {
    const node = document.getElementById("coach-tip");
    const hit = document.querySelector(".is-coach");
    if (!node || !hit) return;
    const r = hit.getBoundingClientRect();
    const pad = 12;
    const tw = node.offsetWidth;
    const th = node.offsetHeight;
    let side = "bottom";
    let top = r.bottom + 14;
    let left = r.left + r.width / 2 - tw / 2;
    if (top + th > window.innerHeight - pad) {
      top = Math.max(pad, r.top - th - 14);
      side = "top";
    }
    if (left + tw > window.innerWidth - pad) left = window.innerWidth - tw - pad;
    if (left < pad) left = pad;
    node.dataset.side = side;
    node.style.top = `${top}px`;
    node.style.left = `${left}px`;
    const caretX = Math.min(tw - 28, Math.max(22, r.left + r.width / 2 - left));
    node.style.setProperty("--caret-x", `${caretX}px`);
  });
}

function coachPrev() {
  if (state.coach === "sync" && state.modal === "add-device") {
    setState({ coach: "add-device", modal: null });
    return;
  }
  const prev = prevCoachBefore(state.coach);
  if (!prev) return;
  const patch = { coach: prev, modal: null };
  if (prev === "floorplan" || prev === "drag") patch.layoutView = "3d";
  if (prev === "add-device") patch.roomPanel = "devices";
  setState(patch);
}

function coachNext() {
  const step = state.coach;
  if (step === "upload" && !state.floors.length) {
    flashToast("Upload a floorplan", "Start with a CAD file or a floorplan image.", "error");
    document.getElementById("file-input")?.click();
    return;
  }
  if (step === "add-device") {
    setState({ coach: "sync", modal: "add-device", roomPanel: "devices" });
    return;
  }
  if (step === "sync") {
    const btn = document.querySelector("[data-action=start-arc-scan]");
    if (btn) btn.click();
    else setState({ modal: "add-device", roomPanel: "devices" });
    return;
  }
  const next = nextCoachAfter(step);
  const patch = { coach: next };
  if (next === "floorplan") patch.layoutView = "3d";
  if (next === "add-device") patch.roomPanel = "devices";
  if (next === "drag") patch.layoutView = "3d";
  setState(patch);
}

function coachLayer() {
  if (!roomsGuiding()) return "";
  if (state.modal && state.coach !== "sync") return "";
  const copy = coachCopy();
  if (!copy) return "";
  const n = coachIndex() + 1;
  const total = coachVisibleSteps().length;
  const first = n <= 1;
  const last = state.coach === "scenes" || n >= total;
  return `
    <div class="coach ${state.modal ? "coach--modal" : ""}" id="coach-layer" aria-live="polite">
      <div class="coach__tip" id="coach-tip" data-side="bottom">
        <span class="coach__caret" aria-hidden="true"></span>
        <div class="coach__head">
          <div class="coach__who"><img src="assets/nav/jemm.png" alt="" /> Jemm</div>
          <button type="button" class="coach__close" data-action="coach-skip" aria-label="Close guidance"><img src="assets/nav/close.svg" alt="" /></button>
        </div>
        <p class="coach__progress">${n} of ${total}</p>
        <strong class="coach__title">${esc(copy.title || "Jemm")}</strong>
        <p class="coach__body">${esc(copy.text)}</p>
        <div class="coach__cta">
          ${first ? `<span class="coach__cta-slot" aria-hidden="true"></span>` : `<button type="button" class="btn btn--ghost coach__btn" data-action="coach-back">Back</button>`}
          <button type="button" class="btn btn--later coach__btn" data-action="coach-skip">Skip</button>
          <button type="button" class="btn ${last ? "btn--next" : "btn--ghost"} coach__btn" data-action="coach-next">${esc(copy.cta)}</button>
        </div>
      </div>
    </div>`;
}

function ordinal(n) {
  if (n === 1) return "st";
  if (n === 2) return "nd";
  if (n === 3) return "rd";
  return "th";
}

function guideText(screen = state.screen) {
  const name = state.property.name || "this property";
  const map = {
    landing: "Select an option below to sign in or start a new setup.",
    welcome: "Hi, I’m Jemm. I’ll help you get set up today.",
    account: "First, let’s get your account details.",
    property: state.addingProperty
      ? "Add the property details for this integration."
      : "Now let’s create the property where we’ll do the integration.",
    arc: "Next, let’s setup the Jemm Arc to the property network.",
    rooms: state.addingProperty
      ? "Add rooms and the layout of this property."
      : "Let’s add the rooms and layout of the property.",
    devices: state.addingProperty
      ? "Place devices in this property."
      : "Finally, let’s place devices in the building.",
    done: `${name} is ready.`,
    dashboard: "Welcome back. Choose a property or add a new one.",
    signin: "Sign in to continue setting up properties with Jemm.",
  };
  return map[screen] || "I’m here if you need a hand.";
}

function showAppNav() {
  return state.loggedIn;
}

function themeToggle() {
  const light = state.theme === "light";
  return `
    <div class="theme-toggle" role="group" aria-label="Color theme">
      <button type="button" class="${light ? "is-on" : ""}" data-action="set-theme" data-value="light" aria-label="Light mode" aria-pressed="${light ? "true" : "false"}">
        <img src="assets/nav/icon-sun.svg" alt="" />
      </button>
      <button type="button" class="${light ? "" : "is-on"}" data-action="set-theme" data-value="dark" aria-label="Dark mode" aria-pressed="${light ? "false" : "true"}">
        <img src="assets/nav/icon-moon.svg" alt="" />
      </button>
    </div>`;
}

function initials() {
  const a = state.account || {};
  return `${(a.first || "J")[0]}${(a.last || "D")[0]}`.toUpperCase();
}

function navActive(id) {
  if (id === "dashboard") return ["dashboard", "done"].includes(state.screen);
  if (id === "hub-rooms") return ["hub-rooms", "rooms"].includes(state.screen);
  if (id === "settings") return ["settings", "profile"].includes(state.screen);
  return state.screen === id;
}

function sidebar() {
  const app = showAppNav();
  const expanded = app && state.sidebarOpen !== false;
  const a = state.account;
  const name = `${a.first || ""} ${a.last || ""}`.trim() || "John Doe";
  const email = a.email || "user@email.com";
  const photo = `<span class="avatar"><img src="assets/nav/avatar.png" alt="" /></span>`;
  const items = APP_NAV.map((item) => `
    <button class="nav-icon ${navActive(item.id) ? "is-active" : ""}" data-go="${item.id}" aria-label="${item.label}">
      <span class="nav-icon__glyph"><img src="${item.icon}" alt="" /></span>
      ${expanded ? `<span>${item.label}</span>` : ""}
    </button>`).join("");
  if (!app) {
    return `
      <aside class="sidebar">
        <button class="sidebar__menu" data-go="landing" aria-label="Menu">
          <img src="assets/nav/menu.svg" alt="" />
        </button>
        <nav class="sidebar__nav">
          <button class="nav-icon is-active" data-go="landing" aria-label="Home">
            <span class="nav-icon__glyph"><img src="assets/nav/icon-home.svg" alt="" /></span>
          </button>
        </nav>
      </aside>`;
  }
  if (!expanded) {
    return `
      <aside class="sidebar">
        <button class="sidebar__menu" data-action="expand-sidebar" aria-label="Open menu">
          <img src="assets/nav/menu-logged.svg" alt="" />
        </button>
        <button class="avatar sidebar__rail-avatar" data-go="profile" aria-label="Profile">
          <img src="assets/nav/avatar.png" alt="" />
        </button>
        <nav class="sidebar__nav">${items}</nav>
      </aside>`;
  }
  return `
    <aside class="sidebar sidebar--app">
      <div class="sidebar__head">
        <div class="sidebar__brand">
          <button type="button" class="sidebar__brand-lockup" data-go="dashboard" aria-label="Jemm home">
            <img class="sidebar__brand-mark" src="assets/nav/logo-mark.svg" alt="" />
            <img class="sidebar__brand-word" src="assets/nav/logo-word.svg" alt="Jemm" />
          </button>
          <button type="button" class="sidebar__x" data-action="collapse-sidebar" aria-label="Collapse">
            <img src="assets/nav/close.svg" alt="" />
          </button>
        </div>
        <button type="button" class="sidebar__profile" data-go="profile">
          ${photo}
          <span class="sidebar__profile-copy">
            <strong>${esc(name)}</strong>
            <em>${esc(email)}</em>
          </span>
          <span class="sidebar__chev"><img src="assets/nav/chevron.svg" alt="" /></span>
        </button>
      </div>
      <nav class="sidebar__nav">${items}</nav>
      <button type="button" class="btn btn--ghost sidebar__logout" data-action="logout">Log out</button>
    </aside>`;
}

function showJemmNavBtn() {
  return state.screen !== "welcome";
}

function currentPropertyLabel() {
  const name = state.property.name;
  if (name) return name;
  const first = liveProperties()[0];
  return first?.details?.name || first?.name || `${state.account.first || "John"} Residence`;
}

function propertyName(p) {
  return p?.details?.name || p?.name || "Untitled property";
}

function liveHealth(p) {
  const devices = p.devices || [];
  const rooms = (p.floors || []).reduce((n, f) => n + (f.rooms?.length || 0), 0);
  const alerts = devices.filter(deviceIsAlert);
  const healthy = devices.filter((d) => !deviceIsAlert(d)).length;
  const lightsOn = devices.filter((d) => d.kind === "light" && d.on !== false).length;
  const level = p.arcStatus !== "online" ? "alert" : alerts.length ? "warn" : p.note ? "warn" : "ok";
  return {
    id: p.id,
    name: propertyName(p),
    type: p.details?.type === "commercial" ? "Commercial" : "Residential",
    arc: p.arcStatus || "offline",
    rooms,
    devices: devices.length,
    healthy,
    alerts,
    lightsOn,
    level,
  };
}

function liveAlerts() {
  return modeProperties().flatMap((p) => liveHealth(p).alerts.map((d) => ({
    id: p.id,
    name: propertyName(p),
    device: d.name,
    room: d.room || "Unknown room",
    body: `${d.name} in ${d.room || "a room"} is ${(d.diagnostic || "in error").toLowerCase()}`,
  })));
}

function healthLabel(level) {
  return level === "alert" ? "Needs attention" : level === "warn" ? "Watch" : "Healthy";
}

function mapPos(lat, lng) {
  const top = 25.802;
  const bot = 25.748;
  const left = -80.214;
  const right = -80.118;
  return {
    x: Math.min(92, Math.max(8, ((lng - left) / (right - left)) * 100)),
    y: Math.min(88, Math.max(10, ((top - lat) / (top - bot)) * 100)),
  };
}

function currentRoomLabel(floors = state.floors, floorIdx = state.hereFloor, roomIdx = state.hereRoom) {
  const floor = floors[floorIdx];
  if (!floor) return "";
  const room = floor.rooms?.[roomIdx];
  const name = room ? roomName(room) : "";
  return [floor.name, name].filter(Boolean).join(" · ");
}

function hereMark(name = "") {
  const tip = name
    ? `This is where you currently are — ${name}`
    : "This is where you currently are";
  return `<span class="here-mark" data-tip="${esc(tip)}" tabindex="0" role="img" aria-label="${esc(tip)}"><span class="here-mark__glyph" aria-hidden="true"></span></span>`;
}

function activeIntegration() {
  if (!state.loggedIn) return null;
  if (state.addingProperty && (state.property.name || state.floors.length)) {
    return {
      name: state.property.name || "New property",
      here: currentRoomLabel() || "No room selected yet",
      devices: state.devices,
      floors: state.floors,
      integrating: true,
    };
  }
  const name = state.property.name;
  const match = name ? liveProperties().find((p) => (p.details?.name || p.name) === name) : null;
  if (!match) return null;
  const floors = state.floors.length ? state.floors : (match.floors || []);
  const devices = state.devices.length ? state.devices : (match.devices || []);
  return {
    id: match.id,
    name: propertyName(match),
    here: currentRoomLabel(floors) || "No room selected",
    devices,
    floors,
    integrating: !!state.reviewing || !!state.addingProperty,
  };
}

function loadPropertyRecord(p) {
  if (!p) return false;
  state.property = {
    ...blankState().property,
    ...(p.details || {}),
    owner: p.details?.owner || p.client?.name || "",
    ownerRole: p.details?.ownerRole || "Admin",
    accessKey: p.details?.accessKey || "",
    zip: p.details?.zip || "",
  };
  state.floors = structuredClone(p.floors || []);
  state.devices = (p.devices || []).map((d) => deviceView(structuredClone(d)));
  state.arcStatus = p.arcStatus || "online";
  state.deviceScan = "found";
  state.reviewing = true;
  state.addingProperty = false;
  state.propMenu = false;
  state.notifyOpen = false;
  state.previewProperty = null;
  const presence = defaultPresence(state.floors);
  state.selectedFloor = presence.hereFloor;
  state.selectedRoom = presence.hereRoom;
  state.hereFloor = presence.hereFloor;
  state.hereRoom = presence.hereRoom;
  state.propertyView = "rooms";
  state.coach = null;
  state.selectedRooms = [];
  resetJemmSpeech();
  return true;
}

function homeHereCard() {
  const here = activeIntegration();
  if (here) return here;
  const p = liveProperties()[0];
  if (!p) return null;
  const floors = p.floors || [];
  return {
    id: p.id,
    name: propertyName(p),
    here: currentRoomLabel(floors) || "No room selected",
    devices: p.devices || [],
    floors,
    integrating: false,
  };
}

function findSheetDevice(id) {
  const fromState = state.devices.find((x) => String(x.id) === String(id));
  if (fromState) return fromState;
  for (const p of liveProperties()) {
    const hit = (p.devices || []).find((x) => String(x.id) === String(id));
    if (hit) return hit;
  }
  return null;
}

function sheetRoomNames() {
  return (state.floors || []).flatMap((f) => (f.rooms || []).map(roomName));
}

function liveMoments(p, i) {
  const h = liveHealth(p);
  const lines = [
    h.arc === "online" ? "Jemm Arc heartbeat is strong" : "Jemm Arc is waiting to connect",
    h.lightsOn ? `${h.lightsOn} light${h.lightsOn === 1 ? "" : "s"} on right now` : "Lights are all off",
    h.alerts.length ? `${h.alerts[0].name} needs a look` : `${h.healthy}/${h.devices || 0} devices healthy`,
    `${h.rooms} room${h.rooms === 1 ? "" : "s"} mapped and watching`,
  ];
  return lines[i % lines.length];
}

function topNav() {
  const app = showAppNav();
  const q = state.navSearch;
  const mode = currentMode();
  return `
    <header class="topnav ${app ? "topnav--app" : ""}">
      ${app ? `
        <div class="topnav__left">
          <button type="button" class="topnav__lockup" data-go="dashboard" aria-label="Jemm home">
            <img class="topnav__lockup-mark" src="assets/nav/logo-mark.svg" alt="" />
            <img class="topnav__lockup-word" src="assets/nav/logo-word.svg" alt="Jemm" />
          </button>
          <div class="mode-switch" data-keep-menu>
            <button type="button" class="mode-switch__btn" data-action="toggle-mode-menu" aria-haspopup="listbox" aria-expanded="${state.propMenu ? "true" : "false"}">
              <span class="mode-switch__icon"><img src="${mode.icon}" alt="" /></span>
              <span class="mode-switch__name">${esc(mode.label)}</span>
              <img class="mode-switch__chev" src="assets/nav/chevron.svg" alt="" />
            </button>
            ${state.propMenu ? `
              <div class="mode-switch__menu" role="listbox">
                ${PORTAL_MODES.map((m) => `
                  <button type="button" class="mode-switch__item ${m.id === mode.id ? "is-on" : ""}" data-action="set-mode" data-value="${m.id}">
                    <img src="${m.icon}" alt="" />
                    ${esc(m.label)}
                  </button>`).join("")}
              </div>` : ""}
          </div>
        </div>
        <label class="nav-search">
          <input data-bind="navSearch" value="${esc(q)}" placeholder="Search by keyword" />
          <img src="assets/icon-search.svg" alt="" />
        </label>
      ` : `<div class="topnav__spacer"></div>`}
      <div class="topnav__right">
        ${themeToggle()}
        ${app ? `
          <div class="notify-wrap" data-keep-menu>
            <button type="button" class="nav-round" data-action="toggle-notify" aria-label="Notifications">
              <img src="assets/nav/bell.svg" alt="" />
              ${liveAlerts().length ? `<span class="nav-badge">${liveAlerts().length}</span>` : ""}
            </button>
            ${state.notifyOpen ? `
              <div class="nav-pop">
                <strong>Notifications</strong>
                ${liveAlerts().length
                  ? liveAlerts().map((a) => `<button type="button" class="nav-pop__item" data-action="open-property" data-id="${esc(a.id)}"><b>${esc(a.name)}</b><span>${esc(a.body)}</span></button>`).join("")
                  : `<p>All properties look healthy. Jemm will ping you here if Arc or a device needs attention.</p>`}
              </div>` : ""}
          </div>
        ` : ""}
        <button class="help-btn" data-action="help" aria-label="Help">
          <img src="assets/nav/help.svg" alt="" />
        </button>
        ${showJemmNavBtn() ? jemmNavToggle() : ""}
      </div>
    </header>`;
}

function jemmDock() {
  if (!state.jemmDock) return "";
  return `
    <aside class="jemm-dock">
      <div class="jemm-dock__avatar"><img src="assets/jemm-face.png" alt="Jemm" /></div>
      <p class="guide-text">${esc(guideText())}</p>
      <div class="jemm-dock__actions">
        ${isOnboarding() ? `<button type="button" class="btn btn--ghost" data-action="show-jemm">Show Jemm</button>` : ""}
        <button type="button" class="modal__x" data-action="toggle-jemm-dock" aria-label="Close">×</button>
      </div>
    </aside>`;
}

function crumbTrail() {
  const screen = state.screen;
  if (screen === "landing" || screen === "welcome" || screen === "done") return null;
  // Wizard pages already have a stepper plus Previous/Next.
  if (!state.reviewing && (isOnboarding() || state.addingProperty)) return null;

  const home = { label: "Home", go: "dashboard" };
  const sheetDevice = state.selectedDevice ? findSheetDevice(state.selectedDevice) : null;
  const floor = state.floors[state.selectedFloor];
  const room = floor?.rooms?.[state.selectedRoom];
  const floorLabel = floor?.name || "";
  const roomLabel = room ? roomName(room) : "";
  const propLabel = currentPropertyLabel();

  const finish = (items) => {
    const list = items.filter(Boolean);
    if (!list.length) return null;
    return {
      items: list.map((item, i) => (i === list.length - 1 ? { label: item.label } : item)),
    };
  };

  if (screen === "signin") {
    return finish([{ label: "Get started", go: "landing" }, { label: "Sign in" }]);
  }

  const liveProperty = state.reviewing || (state.loggedIn && !state.addingProperty && (state.property.name || state.floors.length));
  if (liveProperty && ["property", "arc", "rooms", "devices"].includes(screen)) {
    const items = [home, { label: propLabel, action: "crumb-property" }];
    if (screen === "property") items.push({ label: "Details" });
    else if (screen === "arc") items.push({ label: "Jemm Arc" });
    else if (screen === "devices") {
      items.push({ label: "Rooms", action: "crumb-rooms" });
      items.push({ label: "Devices" });
      if (sheetDevice) items.push({ label: sheetDevice.name });
    } else {
      items.push({ label: "Rooms", action: "crumb-rooms" });
      if (state.propertyView === "devices") {
        items.push({ label: "Devices" });
        if (sheetDevice) items.push({ label: sheetDevice.name });
      } else {
        if (floorLabel) items.push({ label: floorLabel, action: "crumb-floor", index: state.selectedFloor });
        if (roomLabel) {
          items.push(sheetDevice
            ? { label: roomLabel, action: "close-device" }
            : { label: roomLabel });
        }
        if (sheetDevice) items.push({ label: sheetDevice.name });
      }
    }
    return finish(items);
  }

  if (screen === "dashboard") {
    return finish([{ label: "Home" }]);
  }

  if (screen === "hub-rooms") return finish([home, { label: "Rooms" }]);
  if (screen === "clients") return finish([home, { label: "Clients" }]);
  if (screen === "insights") return finish([home, { label: "Insights" }]);
  if (screen === "settings") return finish([home, { label: "Settings" }]);
  if (screen === "profile") return finish([home, { label: "Settings", go: "settings" }, { label: "Profile" }]);
  return finish([home, { label: STEP_META[screen]?.label || "Here" }]);
}

function revealRoomsWorkspace(toBoard = false) {
  later(() => {
    const body = document.querySelector(".wizard__body--rooms");
    if (!body) return;
    if (toBoard) {
      const pin = body.querySelector(".rooms-pin") || body.querySelector(".rooms-board");
      if (pin) {
        body.scrollTo({ top: Math.max(0, pin.offsetTop - 12), behavior: "smooth" });
        return;
      }
    }
    body.scrollTo({ top: 0, behavior: "smooth" });
  }, 40);
}

function openCrumbRooms(extra = {}, toBoard = false) {
  const patch = {
    selectedDevice: null,
    deviceSnapshot: null,
    previewProperty: null,
    modal: null,
    propertyView: "rooms",
    ...extra,
  };
  if (state.screen !== "rooms") {
    Object.assign(state, patch);
    go("rooms");
    revealRoomsWorkspace(toBoard);
    return;
  }
  setState(patch);
  revealRoomsWorkspace(toBoard);
}

function crumbsBar() {
  const trail = crumbTrail();
  if (!trail) return "";
  const items = trail.items.map((item, i, arr) => {
    const last = i === arr.length - 1;
    const sep = last ? "" : `<span class="crumbs__sep" aria-hidden="true"><img src="assets/nav/chevron.svg" alt="" /></span>`;
    let node;
    if (last) {
      node = `<span class="crumbs__here" aria-current="page">${esc(item.label)}</span>`;
    } else if (item.go) {
      node = `<button type="button" class="crumbs__link" data-go="${esc(item.go)}">${esc(item.label)}</button>`;
    } else if (item.action) {
      node = `<button type="button" class="crumbs__link" data-action="${esc(item.action)}"${item.index != null ? ` data-index="${item.index}"` : ""}${item.value != null ? ` data-value="${esc(String(item.value))}"` : ""}>${esc(item.label)}</button>`;
    } else {
      node = `<span class="crumbs__mid">${esc(item.label)}</span>`;
    }
    return `<li class="crumbs__item">${node}${sep}</li>`;
  }).join("");
  return `
    <nav class="crumbs" aria-label="Breadcrumb">
      <ol class="crumbs__trail">${items}</ol>
    </nav>`;
}

function wizardCtaBar(prev, next, nextDisabled = false) {
  return `
    <div class="cta-row">
      <div class="cta-row__inner">
        <button class="btn btn--ghost btn--wide" data-go="${esc(prev)}">Previous</button>
        <button type="button" class="btn btn--later" data-action="finish-later">Finish later</button>
        <button class="btn btn--ghost btn--wide ${nextDisabled ? "is-disabled" : ""}" data-go="${esc(next)}" data-cta="next" ${nextDisabled ? "disabled" : ""}>Next</button>
      </div>
    </div>`;
}

function layout(inner, opts = {}) {
  const { showCta = false, prev, next, nextDisabled = false, landing = false } = opts;
  const wizardFlow = showCta && !state.reviewing;
  const progress = wizardFlow ? stepProgress() : null;
  const home = state.screen === "dashboard";
  const crumbs = crumbsBar();
  const cta = wizardFlow ? wizardCtaBar(prev, next, nextDisabled) : "";
  return `
    <div class="shell ${landing ? "is-landing" : ""} ${wizardFlow ? "is-wizard has-cta" : ""} ${home ? "is-home" : ""} ${showAppNav() && state.sidebarOpen !== false ? "has-appnav" : ""} ${state.selectedDevice ? "has-device-sheet" : ""} ${state.voiceMode ? "is-voice" : ""} ${showPageJemm() && state.jemmPlace === "bottom" ? "has-strip" : ""} ${showPageJemm() && state.jemmPlace === "top" ? "jemm-at-top" : ""} ${showPageJemm() && state.jemmPlace === "side" ? "has-jemm-side" : ""} ${jemmSideCompetes() ? "is-jemm-docked" : ""} ${jemmSideCompetes() && !state.jemmSideOpen ? "is-jemm-collapsed" : ""} ${jemmSideCompetes() && state.jemmSideOpen ? "is-jemm-side-open" : ""} ${crumbs ? "has-crumbs" : ""}">
      ${sidebar()}
      ${landing ? "" : `<div class="page-wash" aria-hidden="true"></div>`}
      ${topNav()}
      ${crumbs}
      ${state.toast ? `
        <div class="toast toast--${state.toastKind === "error" ? "error" : "success"}" role="status">
          <div>
            <strong>${esc(state.toastTitle || (state.toastKind === "error" ? "Error" : "Success"))}</strong>
            <p>${esc(state.toast)}</p>
          </div>
          <button class="toast__close" data-action="dismiss-toast" aria-label="Dismiss">×</button>
        </div>` : ""}
      ${wizardFlow ? `
        <div class="chrome">
          ${stepper(progress)}
        </div>` : ""}
      <main class="stage ${state.jemmDock ? "has-dock" : ""} ${home ? "is-home" : ""}">
        ${!wizardFlow && showPageJemm() && state.jemmPlace === "top" ? `
          <div class="jemm-hero jemm-hero--app ${state.reviewing ? "jemm-hero--speak" : ""}">
            ${jemmOrb("jemm-orb--hero")}
            ${state.reviewing ? jemmSpeakLine() : ""}
          </div>` : ""}
        <div class="stage-inner">${inner}</div>
        ${jemmDock()}
      </main>
      ${cta}
      ${showPageJemm() && state.jemmPlace === "bottom" ? `<div class="helpstrip-slot">${jemmStrip(helpstripLine())}</div>` : ""}
      ${showPageJemm() && state.jemmPlace === "side" ? jemmSide() : ""}
      ${state.selectedDevice ? deviceSheet() : ""}
      ${state.voiceMode ? `<div class="voice-halo" aria-hidden="true"></div>` : ""}
    </div>
    ${state.jemmVideo ? jemmVideoModal() : ""}
    ${state.showHelp ? helpModal() : ""}
    ${state.modal === "upload" ? uploadModal() : ""}
    ${state.modal === "floor" ? floorModal() : ""}
    ${state.modal === "move-rooms" ? moveRoomsModal() : ""}
    ${state.modal === "bulk-edit" ? bulkEditModal() : ""}
    ${state.modal === "confirm" ? confirmModal() : ""}
    ${state.modal === "device-name" ? editDeviceNameModal() : ""}
    ${state.modal === "scene" ? sceneModal() : ""}
    ${state.modal === "property" ? propertyEditModal() : ""}
    ${state.modal === "add-device" ? addDeviceModal() : ""}
    ${state.modal === "diagnostics" ? diagnosticsModal() : ""}
    ${state.modal === "leave" ? leaveModal() : ""}
    ${coachLayer()}
  `;
}

function jemmVideoModal() {
  return `
    <div class="overlay" data-action="close-jemm-video">
      <div class="jemm-player" onclick="event.stopPropagation()">
        <div class="jemm-player__top">
          <span>Jemm</span>
          <button type="button" class="modal__x" data-action="close-jemm-video" aria-label="Close">×</button>
        </div>
        <div class="welcome__video">
          <video id="jemm-home-video" playsinline autoplay>
            <source src="assets/hi-jemm.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="jemm-player__bar">
          <p class="guide-text">Hi, I’m Jemm. I’ll help you keep every property in check.</p>
        </div>
      </div>
    </div>`;
}

function helpModal() {
  return `
    <div class="overlay" data-action="close-help">
      <div class="help-panel" onclick="event.stopPropagation()">
        <div class="modal__top"><button class="modal__x" data-action="close-help">×</button></div>
        <h2>Need a hand?</h2>
        <p style="color:var(--muted);margin-bottom:12px">This portal walks an integrator through a turn-key Jemm setup.</p>
        <ol>
          <li>Create the integrator account</li>
          <li>Add the client property</li>
          <li>Bring Jemm Arc onto the network</li>
          <li>Drop in floorplans so Jemm can map rooms</li>
          <li>Assign devices to those rooms</li>
        </ol>
        <button class="btn btn--primary" style="margin-top:20px" data-action="close-help">Got it</button>
      </div>
    </div>`;
}

function uploadModal() {
  const p = state.uploadPct;
  const rooms = p > 40 ? "14 rooms found" : "# rooms found";
  const plans = p > 18 ? "2 floorplans identified..." : "# floorplans identified...";
  return `
    <div class="overlay">
      <div class="modal">
        <div class="modal__top"><button class="modal__x" data-action="close-modal">×</button></div>
        <div class="modal__body">
          <div class="ring" style="--p:${p}"><span>${p}%</span></div>
          <h2>Now uploading floorplans</h2>
          <p>${plans}<br>${rooms}<br>Updating layout...</p>
        </div>
        <div class="modal__cta">
          <button class="btn btn--secondary" data-action="close-modal">Cancel</button>
          <button class="btn btn--next" data-action="confirm-upload" ${p < 100 ? "disabled" : ""}>Confirm</button>
        </div>
      </div>
    </div>`;
}

function propertyEditModal() {
  const p = state.propertyDraft || state.property;
  return `
    <div class="overlay" data-action="close-modal">
      <div class="modal modal--property" onclick="event.stopPropagation()">
        <div class="modal__top">
          <h2>Edit property</h2>
          <button class="modal__x" data-action="close-modal" aria-label="Close">×</button>
        </div>
        <div class="modal__body">
          ${typePickHtml(p, "draft-type")}
          <div class="form-grid form-grid--property">
            ${field("Property name (Optional)", "propertyDraft.name", p.name, "e.g. Christo’s home")}
            <label class="field">
              <span class="field__label">Time zone</span>
              <select data-bind="propertyDraft.timezone">
                ${TIMEZONES.map((z) => `<option ${z === p.timezone ? "selected" : ""}>${z}</option>`).join("")}
              </select>
            </label>
            ${field("Street address", "propertyDraft.street", p.street, "e.g. 1234 Main Street")}
            ${field("Additional details", "propertyDraft.unit", p.unit, "e.g Apt, Unit, Ste")}
            ${field("City", "propertyDraft.city", p.city, "e.g. New York City, Miami, Los Angeles")}
            ${field("State/province", "propertyDraft.state", p.state, "e.g. Florida")}
            ${field("ZIP / postal code", "propertyDraft.zip", p.zip, "e.g. 33014")}
            ${field("Owner name", "propertyDraft.owner", p.owner, "e.g. Christo Georgiv")}
            <label class="field">
              <span class="field__label">Owner role</span>
              <select data-bind="propertyDraft.ownerRole">
                ${["Admin", "Owner", "Guest"].map((role) => `<option ${role === (p.ownerRole || "Admin") ? "selected" : ""}>${role}</option>`).join("")}
              </select>
            </label>
            ${field("Access key", "propertyDraft.accessKey", p.accessKey, "e.g. 0927495")}
          </div>
        </div>
        <div class="modal__cta">
          <button type="button" class="btn btn--secondary" data-action="close-modal">Cancel</button>
          <button type="button" class="btn btn--next" data-action="save-property-meta">Save</button>
        </div>
      </div>
    </div>`;
}

function savePropertyMeta() {
  const draft = state.propertyDraft;
  if (!draft) {
    setState({ modal: null });
    flashToast("Nothing to save", "Open edit again if you still need to change details.", "error");
    return;
  }
  if (!String(draft.name || "").trim()) {
    flashToast("Can’t save", "Give the property a name.", "error");
    return;
  }
  if (!String(draft.street || "").trim() || !String(draft.city || "").trim()) {
    flashToast("Can’t save", "Add a street address and city.", "error");
    return;
  }
  const prevName = state.property.name;
  const property = { ...state.property, ...draft };
  const portalMode = property.type === "commercial" ? "office" : "residential";
  persistMode(portalMode);
  const rec = currentPropertyRecord();
  const properties = liveProperties().map((p) => {
    const same = rec ? String(p.id) === String(rec.id) : (p.details?.name || p.name) === prevName;
    if (!same) return p;
    return { ...p, details: { ...(p.details || {}), ...draft }, name: draft.name || p.name };
  });
  setState({ property, properties, propertyDraft: null, modal: null, portalMode });
  if (state.loggedIn) persistSession();
  flashToast("Saved", "Property details updated.");
}

function floorModal() {
  return `
    <div class="overlay" data-action="close-modal">
      <div class="modal" style="width:min(480px,100%)" onclick="event.stopPropagation()">
        <div class="modal__top"><button class="modal__x" data-action="close-modal">×</button></div>
        <div class="modal__body">
          <h2>Add floor</h2>
          <p>Name this level so Jemm can group rooms and devices.</p>
          <label class="field">
            <span class="field__label">Floor name</span>
            <input id="floor-name" placeholder="e.g. 2nd floor" />
          </label>
        </div>
        <div class="modal__cta">
          <button class="btn btn--secondary" data-action="close-modal">Cancel</button>
          <button class="btn btn--next" data-action="save-floor">Add floor</button>
        </div>
      </div>
    </div>`;
}

function moveRoomsModal() {
  const n = (state.selectedRooms || []).length;
  return `
    <div class="overlay" data-action="close-modal">
      <div class="modal" style="width:min(480px,100%)">
        <div class="modal__top">
          <h2>Move ${n} room${n === 1 ? "" : "s"}</h2>
          <button type="button" class="modal__x" data-action="close-modal" aria-label="Close">×</button>
        </div>
        <div class="modal__body">
          <p>Choose the floor these rooms should live on.</p>
          <label class="field">
            <span class="field__label">Destination floor</span>
            <select id="move-floor">
              ${state.floors.map((f, i) => `<option value="${i}" ${i === state.selectedFloor ? "selected" : ""}>${esc(f.name)}</option>`).join("")}
            </select>
          </label>
        </div>
        <div class="modal__cta">
          <button type="button" class="btn btn--secondary" data-action="close-modal">Cancel</button>
          <button type="button" class="btn btn--next" data-action="confirm-move-rooms">Move</button>
        </div>
      </div>
    </div>`;
}

function bulkEditModal() {
  const n = (state.selectedRooms || []).length;
  return `
    <div class="overlay" data-action="close-modal">
      <div class="modal" style="width:min(480px,100%)">
        <div class="modal__top">
          <h2>Edit ${n} room${n === 1 ? "" : "s"}</h2>
          <button type="button" class="modal__x" data-action="close-modal" aria-label="Close">×</button>
        </div>
        <div class="modal__body">
          <p>${n === 1 ? "Rename this room." : "Apply a name to the selected rooms. Each one gets a number suffix."}</p>
          <label class="field">
            <span class="field__label">Name</span>
            <input id="bulk-room-name" placeholder="e.g. Meeting" />
          </label>
        </div>
        <div class="modal__cta">
          <button type="button" class="btn btn--secondary" data-action="close-modal">Cancel</button>
          <button type="button" class="btn btn--next" data-action="confirm-bulk-edit">Save</button>
        </div>
      </div>
    </div>`;
}

function diagnosticsModal() {
  const items = state.devices;
  const issues = alertDevices(items);
  return `
    <div class="overlay" data-action="close-modal">
      <div class="modal modal--diagnostics">
        <div class="modal__top">
          <h2>Device diagnostics</h2>
          <button type="button" class="modal__x" data-action="close-modal" aria-label="Close">×</button>
        </div>
        <div class="modal__body modal__body--left">
          <p>${issues.length ? `${issues.length} device${issues.length === 1 ? "" : "s"} ${issues.length === 1 ? "needs" : "need"} attention.` : "All devices on this property look healthy."}</p>
          <div class="diag-list">
            ${items.length ? items.map((d) => {
              const alert = deviceIsAlert(d);
              return `
                <button type="button" class="diag-row ${alert ? "is-alert" : "is-ok"}" data-action="open-device" data-id="${esc(d.id)}">
                  <span class="device-rail__status ${alert ? "is-alert" : "is-ok"}" aria-hidden="true"></span>
                  <span class="diag-row__copy">
                    <strong>${esc(d.name)}</strong>
                    <em>${esc(d.room || "Unassigned")} · ${esc(deviceStatusLabel(d))}</em>
                  </span>
                </button>`;
            }).join("") : `<p class="muted-note">No devices to diagnose yet.</p>`}
          </div>
        </div>
      </div>
    </div>`;
}

function scanRadarHtml(status) {
  return `
    <div class="scan-hero">
      <div class="radar is-busy" role="status" aria-live="polite" aria-label="Scanning the property network">
        <div class="radar__ring"></div>
        <div class="radar__ring"></div>
        <div class="radar__ring"></div>
        <div class="radar__sweep" aria-hidden="true"></div>
        <i class="radar__blip" style="--x:28%;--y:32%"></i>
        <i class="radar__blip" style="--x:68%;--y:24%;animation-delay:0.4s"></i>
        <i class="radar__blip" style="--x:72%;--y:62%;animation-delay:0.9s"></i>
        <i class="radar__blip" style="--x:34%;--y:70%;animation-delay:1.3s"></i>
        <div class="arc-unit"><img src="assets/icon-arc.svg" alt="" /></div>
      </div>
      <h3>Scanning the property network…</h3>
      <p>${esc(status || "Jemm Arc is identifying lights, shades, climate, and Jemm devices on this network.")}</p>
      <div class="scan-progress" aria-hidden="true"><span></span></div>
    </div>`;
}

function scanHitRow(d, kind) {
  return `
    <li class="scan-hit scan-hit--${kind}">
      <span class="scan-hit__icon">${kindIconHtml(deviceIcon(d))}</span>
      <span>
        <strong>${esc(d.name)}</strong>
        <em>${esc(d.room)} · ${esc(kindLabel(d.kind))}</em>
      </span>
    </li>`;
}

function scanResultHtml(result) {
  const added = result?.added || [];
  const removed = result?.removed || [];
  const empty = !added.length && !removed.length;
  return `
    <div class="modal__body">
      <div class="scan-hero scan-hero--result">
        <div class="radar is-online">
          <div class="radar__ring"></div>
          <div class="radar__ring"></div>
          <div class="radar__ring"></div>
          <div class="arc-unit"><img src="assets/icon-arc.svg" alt="" /></div>
        </div>
        <h3>${empty ? "Already in sync" : "Sync complete"}</h3>
        <p>${empty
          ? "Every active device on the network is already in this property."
          : `${added.length} added · ${removed.length} no longer active.`}</p>
      </div>
      ${added.length ? `
        <div class="scan-list">
          <h4>Added</h4>
          <ul>${added.map((d) => scanHitRow(d, "add")).join("")}</ul>
        </div>` : ""}
      ${removed.length ? `
        <div class="scan-list">
          <h4>Removed</h4>
          <ul>${removed.map((d) => scanHitRow(d, "drop")).join("")}</ul>
        </div>` : ""}
    </div>
    <div class="modal__cta">
      <button type="button" class="btn btn--next btn--wide" data-action="finish-scan">Done</button>
    </div>`;
}

function addDeviceModal() {
  const scanning = state.deviceScan === "scanning";
  const result = state.scanResult;
  const rooms = existingRoomNames();
  const kinds = DEVICE_KINDS;
  const pickedKind = state.addDeviceKind && kinds.includes(state.addDeviceKind) ? state.addDeviceKind : "light";
  const title = scanning || result ? "Sync devices" : "Add devices";
  return `
    <div class="overlay"${scanning ? "" : ` data-action="close-modal"`}>
      <div class="modal modal--device">
        <div class="modal__top">
          <h2>${title}</h2>
          <button type="button" class="modal__x" data-action="${result ? "finish-scan" : "close-modal"}" aria-label="Close"${scanning ? " disabled" : ""}>×</button>
        </div>
        ${scanning ? `
          <div class="modal__body">${scanRadarHtml(state.scanStatus)}</div>
        ` : result ? scanResultHtml(result) : `
          <div class="modal__body modal__body--left">
            <p>Add a device yourself, or press scan so Jemm Arc identifies devices already on the network and syncs them here.</p>
            <button type="button" class="btn btn--next btn--wide" data-action="start-arc-scan" data-coach="sync">
              <img class="btn__mark" src="assets/jemm-mark.svg" alt="" />
              Scan with Jemm Arc
            </button>
            <p class="modal__or">or add one</p>
            <div class="form-grid form-grid--device">
              <label class="field">
                <span class="field__label">Device name</span>
                <input id="new-device-name" placeholder="e.g. Kitchen light" />
              </label>
              <label class="field">
                <span class="field__label">Type</span>
                <select id="new-device-kind">
                  ${kinds.map((k) => `<option value="${esc(k)}" ${k === pickedKind ? "selected" : ""}>${esc(kindLabel(k))}</option>`).join("")}
                </select>
              </label>
              <label class="field">
                <span class="field__label">Room</span>
                <select id="new-device-room">
                  ${rooms.length
                    ? rooms.map((r) => `<option>${esc(r)}</option>`).join("")
                    : `<option>New room</option>`}
                </select>
              </label>
            </div>
          </div>
          <div class="modal__cta">
            <button type="button" class="btn btn--secondary" data-action="close-modal">Cancel</button>
            <button type="button" class="btn btn--next" data-action="save-manual-device">Add device</button>
          </div>
        `}
      </div>
    </div>`;
}

function deviceCard(d, view) {
  const on = d.on !== false;
  const alert = deviceIsAlert(d);
  if (view === "list") {
    return `
      <button type="button" class="device-row ${alert ? "is-alert" : ""} ${state.flashingDevice === d.id ? "is-flashing" : ""}" data-action="open-device" data-id="${esc(d.id)}">
        <span class="device-rail__status ${alert ? "is-alert" : "is-ok"}" aria-hidden="true"></span>
        ${kindIconHtml(deviceIcon(d), "device-row__icon")}
        <span class="device-row__copy">
          <strong>${esc(d.name)}</strong>
          <em>${esc(d.room)} · ${alert ? esc(deviceStatusLabel(d)) : (on ? "On" : "Off")}</em>
        </span>
        <span class="chev">›</span>
      </button>`;
  }
  return `
    <button type="button" class="device-tile" data-action="open-device" data-id="${esc(d.id)}">
      <strong>${esc(d.name)}</strong>
      ${kindIconHtml(deviceIcon(d))}
      <span>${esc(d.room)} · ${on ? "On" : "Off"}</span>
    </button>`;
}

function sheetStatus(d) {
  if (deviceIsAlert(d)) {
    const label = /off/i.test(String(d.diagnostic || "")) || d.on === false ? "Offline" : (d.diagnostic || "Error");
    return { ok: false, label };
  }
  return { ok: true, label: "Active" };
}

function powerSeg(d) {
  const on = d.on !== false;
  return `
    <div class="sheet-power-row">
      <div class="seg seg--sm" role="group" aria-label="Power">
        <button type="button" class="${on ? "is-on" : ""}" data-action="device-on" data-value="true">On</button>
        <button type="button" class="${!on ? "is-on" : ""}" data-action="device-on" data-value="false">Off</button>
      </div>
      <button type="button" class="icon-btn icon-btn--link" data-action="device-history" data-icon="history" aria-label="Device history">
        <span class="icon-btn__glyph" aria-hidden="true"></span>
      </button>
    </div>`;
}

function sheetSlider(label, value, opts) {
  const { min, max, field, fmt, id, step, hint } = opts;
  return `
    <label class="sheet-slider">
      ${label ? `
      <span class="sheet-slider__top">
        <span>${esc(label)}</span>
        <em data-live="${esc(field)}">${esc(formatSheetLive(fmt, value))}</em>
      </span>` : `<em class="sheet-slider__live" data-live="${esc(field)}">${esc(formatSheetLive(fmt, value))}</em>`}
      ${hint ? `<p class="sheet-slider__hint">${esc(hint)}</p>` : ""}
      <input type="range" min="${min}" max="${max}" ${step ? `step="${step}"` : ""} value="${value}" data-device-num="${esc(field)}" data-live-fmt="${esc(fmt)}" ${id ? `data-intensity="${esc(id)}"` : ""} />
    </label>`;
}

function formatSheetLive(fmt, value) {
  if (fmt === "kelvin") return `${value}K`;
  if (fmt === "temp") return `${value}°F`;
  if (fmt === "pos") return `${value}%`;
  return `${value}%`;
}

function sheetPills(action, value, items) {
  return `
    <div class="sheet-pills" role="group">
      ${items.map((item) => {
        const val = typeof item === "string" ? item : item.value;
        const label = typeof item === "string" ? item[0].toUpperCase() + item.slice(1) : item.label;
        return `<button type="button" class="${String(value) === String(val) ? "is-on" : ""}" data-action="${esc(action)}" data-value="${esc(val)}">${esc(label)}</button>`;
      }).join("")}
    </div>`;
}

function lightControls(d) {
  const intensity = d.intensity ?? 70;
  const kelvin = d.kelvin ?? 3000;
  return `
    ${sheetSlider("Intensity", intensity, { min: 0, max: 100, field: "intensity", fmt: "pct", id: d.id, hint: "Controls the brightness of this light." })}
    ${sheetSlider("Color temperature", kelvin, { min: 2700, max: 6500, field: "kelvin", fmt: "kelvin", step: 50 })}
    <div class="sheet-swatches" role="list" aria-label="Color temperature presets">
      ${COLOR_TEMPS.map((c) => `
        <button type="button" class="sheet-swatch ${Number(kelvin) === c.k ? "is-on" : ""}" data-action="device-kelvin" data-value="${c.k}" title="${c.label}" aria-label="${c.label}" style="--swatch:${c.swatch}"></button>
      `).join("")}
    </div>
    <label class="field">
      <span class="field__label">Fade rate</span>
      <select data-device-field="fade">
        ${FADE_RATES.map((f) => `<option value="${esc(f.value)}" ${d.fade === f.value ? "selected" : ""}>${esc(f.label)}</option>`).join("")}
      </select>
    </label>`;
}

function audioControls(d) {
  return `
    <div class="sheet-audio">
      ${sheetSlider("Master volume", d.volume ?? d.intensity ?? 40, { min: 0, max: 100, field: "volume", fmt: "pct" })}
      <button type="button" class="btn btn--secondary sheet-mute ${d.muted ? "is-on" : ""}" data-action="device-mute">${d.muted ? "Muted" : "Mute"}</button>
    </div>
    <label class="field">
      <span class="field__label">Input source</span>
      <select data-device-field="source">
        ${AUDIO_SOURCES.map((s) => `<option ${d.source === s ? "selected" : ""}>${esc(s)}</option>`).join("")}
      </select>
    </label>
    <button type="button" class="btn btn--secondary btn--wide" data-action="play-chime">Play Test Chime</button>`;
}

function hvacControls(d) {
  const mode = d.hvacMode || (d.on === false ? "off" : "auto");
  const temp = d.targetTemp ?? 72;
  const fan = d.fan || "auto";
  return `
    ${sheetPills("device-hvac", mode, HVAC_MODES)}
    <div class="sheet-stepper" aria-label="Target temperature">
      <button type="button" data-action="device-temp" data-delta="-1" aria-label="Lower temperature">−</button>
      <strong data-live="targetTemp">${temp}°F</strong>
      <button type="button" data-action="device-temp" data-delta="1" aria-label="Raise temperature">+</button>
    </div>
    ${sheetSlider("Target temperature", temp, { min: 60, max: 80, field: "targetTemp", fmt: "temp" })}
    <p class="sheet-label">Fan speed</p>
    ${sheetPills("device-fan", fan, FAN_SPEEDS)}`;
}

function shadeControls(d) {
  const pos = d.shadePos ?? d.intensity ?? 0;
  return `
    <div class="seg">
      <button type="button" class="${pos <= 0 ? "is-on" : ""}" data-action="device-shade" data-value="0">Closed</button>
      <button type="button" class="${pos >= 100 ? "is-on" : ""}" data-action="device-shade" data-value="100">Open</button>
    </div>
    ${sheetSlider("Position", pos, { min: 0, max: 100, field: "shadePos", fmt: "pos" })}`;
}

function sheetQuickControls(d) {
  const type = deviceControlType(d);
  if (type === "light") return lightControls(d);
  if (type === "audio") return audioControls(d);
  if (type === "hvac") return hvacControls(d);
  if (type === "shade") return shadeControls(d);
  if (type === "jemm") return jemmControls(d);
  if (type === "fan") return fanControls(d);
  if (type === "camera" || type === "power") return "";
  return "";
}

function jemmControls(d) {
  return `
    <div class="sheet-jemm-vol">
      <h3>Speaker volume</h3>
      <p>Control the volume when Jemm is speaking.</p>
      ${sheetSlider("", d.volume ?? d.intensity ?? 40, { min: 0, max: 100, field: "volume", fmt: "pct" })}
    </div>`;
}

function fanControls(d) {
  return `
    <p class="sheet-label">Fan speed</p>
    ${sheetPills("device-fan", d.fan || "med", FAN_SPEEDS)}`;
}

function sheetDetailRow(label, valueHtml) {
  return `
    <div class="sheet-detail">
      <span>${esc(label)}</span>
      <div class="sheet-detail__val">${valueHtml}</div>
    </div>`;
}

function sheetKv(rows) {
  return `
    <div class="sheet-kv">
      ${rows.map(([k, v]) => `<div class="sheet-kv__row"><span>${esc(k)}</span><strong>${esc(v || "—")}</strong></div>`).join("")}
    </div>`;
}

function deviceSheetDirty() {
  const snap = state.deviceSnapshot;
  const current = state.selectedDevice ? deviceView(findSheetDevice(state.selectedDevice)) : null;
  return !!(snap && current && SHEET_FIELDS.some((k) => snap[k] !== current[k]));
}

function closeDeviceSheet() {
  const patch = { selectedDevice: null, deviceSnapshot: null, flashingDevice: null };
  if (deviceSheetDirty() && state.selectedDevice) {
    const restored = mutateDevice(state.selectedDevice, state.deviceSnapshot);
    setState({ ...restored, ...patch });
    flashToast("Cancelled", "Device changes were discarded.", "error");
    return;
  }
  setState(patch);
}

function playTestChime() {
  const ctx = audioCtx();
  if (!ctx) {
    flashToast("Chime sent", "Playback test queued on the zone.");
    return;
  }
  const t0 = ctx.currentTime;
  [523.25, 659.25, 783.99].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    const start = t0 + i * 0.12;
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(0.12, start + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, start + 0.28);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start(start);
    osc.stop(start + 0.3);
  });
  flashToast("Test chime", "Playback sent to the zone.");
}

function pingJemm() {
  const raw = findSheetDevice(state.selectedDevice);
  if (!isJemmDevice(raw)) return;
  const id = raw.id;
  state.flashingDevice = id;
  flashToast("Ping Jemm", `${raw.name} is identifying itself.`);
  later(() => {
    if (state.flashingDevice === id) setState({ flashingDevice: null });
  }, 2200);
}

function sheetHeroKind(d) {
  if (d.kind === "arc") return "arc";
  if (d.kind === "mic") return "mic";
  if (d.kind === "light") return "light";
  return d.kind || "device";
}

function sheetShowsPower(d) {
  const type = deviceControlType(d);
  return type && type !== "shade" && type !== "hvac";
}

function deviceSheet() {
  const raw = findSheetDevice(state.selectedDevice);
  if (!raw) return "";
  const d = deviceView(raw);
  const status = sheetStatus(d);
  const room = (d.room || "").trim();
  const rooms = sheetRoomNames();
  const accord = state.sheetAccord || { test: true, hardware: true, network: true };
  const jemm = isJemmDevice(d);
  const icon = heroIconFor(d);
  const glyph = isGlyphKind(d.kind) ? " is-glyph" : "";
  const updated = String(d.updated || "August 01, 2026 at 07:00:00pm EAST").replace(" at ", "\nat ");
  const heroKind = sheetHeroKind(d);
  return `
    <div class="sheet-scrim" data-action="close-sheet">
    <aside class="sheet sheet--device ${state.flashingDevice === d.id ? "is-flashing" : ""}" role="dialog" aria-modal="true" aria-labelledby="sheet-device-name" style="--sheet-hero: 0">
      <div class="sheet-glow ${jemm ? "is-jemm" : ""}" aria-hidden="true"></div>
      <header class="sheet__head sheet__head--device">
        <span class="sheet-head__collapsed">${esc(d.name)}</span>
        <button type="button" class="modal__x" data-action="close-sheet" aria-label="Close">×</button>
      </header>
      <div class="sheet__body" data-sheet-scroll>
        <div class="sheet-hero ${jemm ? "is-jemm" : ""} sheet-hero--${esc(heroKind)}">
          <div class="sheet-hero__art" aria-hidden="true">
            <div class="sheet-hero__icon${glyph}" data-sheet-icon><img src="${icon}" alt="" /></div>
          </div>
          <div class="sheet-hero__copy">
            <h3 id="sheet-device-name">${esc(d.name)}</h3>
            <p>${esc(d.hwId || "—")}</p>
            ${sheetShowsPower(d) ? `<div class="sheet-hero__power">${powerSeg(d)}</div>` : ""}
          </div>
        <div class="sheet-panel">
        <div class="sheet-status">
          <span>Status</span>
          <span class="status-dot ${status.ok ? "" : "status-dot--alert"}"><i></i>${esc(status.label)}</span>
        </div>
        <div class="sheet-controls">${sheetQuickControls(d)}</div>
        <h3 class="sheet-details-title">Details</h3>
        ${sheetDetailRow("Name", `
          <em class="sheet-detail__text">${esc(d.name)}</em>
          <button type="button" class="sheet-detail__edit" data-action="edit-device-name" aria-label="Edit device name">
            <img src="assets/icon-pencil.svg" alt="" />
          </button>
        `)}
        ${sheetDetailRow("Device ID", `<strong>${esc(d.hwId || "—")}</strong>`)}
        ${sheetDetailRow("Location", `
          <select data-device-field="room" aria-label="Room">
            <option value="" ${room ? "" : "selected"}>Unassigned</option>
            ${rooms.map((r) => `<option ${r === room ? "selected" : ""}>${esc(r)}</option>`).join("")}
          </select>
        `)}
        ${sheetDetailRow("Size", `<strong>${esc(d.size || "—")}</strong>`)}
        ${sheetDetailRow("Weight", `<strong>${esc(d.weight || "—")}</strong>`)}
        ${sheetDetailRow("Manufacturer", `<strong>${esc(d.manufacturer || "—")}</strong>`)}
        ${sheetDetailRow("Last updated on", `<strong class="sheet-detail__updated">${esc(updated)}</strong>`)}
        <details class="sheet-acc" data-section="hardware" ${accord.hardware !== false ? "open" : ""}>
          <summary>Hardware</summary>
          <div class="sheet-acc__body">${sheetKv([
            ["Protocol type", d.protocol],
            ["Integration / load channel ID", d.channel],
            ["Firmware version", d.firmware],
          ])}</div>
        </details>
        <details class="sheet-acc" data-section="network" ${accord.network !== false ? "open" : ""}>
          <summary>Network</summary>
          <div class="sheet-acc__body">${sheetKv([
            ["IP address", d.ip],
            ["MAC address", d.mac],
          ])}</div>
        </details>
        <div class="sheet-danger-card">
          <h3>Remove this device</h3>
          <p>Use this option ONLY if you wish to unpair and remove this device from your building’s Jemm Arc. You can always pair it again.</p>
          <button type="button" class="sheet-unpair" data-action="unpair-device">Unpair and remove</button>
        </div>
        </div>
        </div>
      </div>
      <div class="sheet__cta sheet__cta--device">
        <div class="sheet-cta__row">
          ${jemm ? `<button type="button" class="btn btn--secondary" data-action="ping-jemm">Ping Jemm</button>` : ""}
          <button type="button" class="btn btn--next" data-action="save-device">Save Changes</button>
        </div>
      </div>
    </aside>
    </div>`;
}

function leaveModal() {
  const step = stepProgress();
  const where = step ? `${step.label} (${step.n}/${step.total})` : "this step";
  return `
    <div class="overlay">
      <div class="modal modal--leave" onclick="event.stopPropagation()">
        <div class="modal__top"><button class="modal__x" data-action="close-modal" aria-label="Close">×</button></div>
        <div class="modal__body">
          <div class="jemm-chip"><img src="assets/jemm-face.png" alt="Jemm" /></div>
          <h2>Finish later?</h2>
          <p>You’re on <strong>${esc(where)}</strong>. Your changes will be saved as a draft, so you can pick up right where you left off.</p>
          <p>We still recommend finishing setup now so this property can go live with Jemm.</p>
        </div>
        <div class="modal__cta">
          <button class="btn btn--secondary" data-action="save-draft">Save as draft</button>
          <button class="btn btn--next" data-action="close-modal">Continue setup</button>
        </div>
      </div>
    </div>`;
}

function landing() {
  const draft = state.draft || loadDraft();
  const draftStep = draft ? stepProgress(draft.screen, !!draft.addingProperty) : null;
  return layout(`
    <div class="center-stage">
      ${draft ? `
        <button type="button" class="draft-banner" data-action="resume-draft">
          You have a setup draft${draftStep ? ` on ${esc(draftStep.label)} (${draftStep.n}/${draftStep.total})` : ""}. Resume setup →
        </button>` : ""}
      <h1 class="page-title page-title--lg">Select an option below</h1>
      <div class="cards">
        <article class="choice">
          <img src="assets/ill-login.png" alt="" />
          <h2>Sign in</h2>
          <p>Sign in with your existing credentials.</p>
          <button class="btn btn--primary" data-go="signin">Login</button>
        </article>
        <article class="choice">
          <img src="assets/ill-empty.png" alt="" />
          <h2>Register new account</h2>
          <p>Set up your account and start setting up client’s properties with Jemm Arc.</p>
          <button class="btn btn--primary" data-go="welcome">Quick setup</button>
        </article>
      </div>
    </div>
  `, { landing: true });
}

function signin() {
  return layout(`
    <form class="signin" data-form="signin">
      <div class="jemm-chip"><img src="assets/jemm-face.png" alt="Jemm" /></div>
      <h1>Sign in</h1>
      <label class="field">
        <span class="field__label">Email</span>
        <input name="email" type="email" placeholder="you@company.com" value="${esc(state.account.email)}" />
      </label>
      <label class="field field--password">
        <span class="field__label">Password</span>
        <input name="password" type="${state.showPass ? "text" : "password"}" value="password" />
        <button class="eye" type="button" data-action="toggle-pass" aria-label="Show password">
          <img src="assets/icon-eye.svg" alt="" />
        </button>
      </label>
      <button class="btn btn--primary" type="submit">Login</button>
      <p style="text-align:center;color:var(--gray);font-size:13px">Demo: any password signs you into a finished property.</p>
    </form>
  `, { landing: true });
}

function welcome() {
  return layout(`
    <div class="welcome" data-go="account">
      <div class="welcome__video">
        <video id="hi-jemm" playsinline autoplay>
          <source src="assets/hi-jemm.mp4" type="video/mp4" />
        </video>
      </div>
      <h1 class="guide-text">Hi, I’m Jemm<br>I’ll help you get set up today.</h1>
      <p class="hint">Click anywhere to continue</p>
    </div>
  `, { landing: true });
}

function kicker(title) {
  if (state.reviewing) return "";
  if (!state.jemmVisible || state.jemmPlace !== "top") return `<h1 class="page-title">${title}</h1>`;
  return `
    <div class="jemm-hero">
      ${jemmOrb("jemm-orb--hero")}
      <h1 class="page-title">${title}</h1>
    </div>`;
}

function helpstripLine() {
  if (state.voiceError) return state.voiceError;
  if (state.voiceMode && state.jemmReply) return state.jemmReply;
  if (state.voiceMode) return "Listening… I’m right here.";
  if (roomsGuiding()) {
    const copy = coachCopy();
    if (copy?.strip) return copy.strip;
  }
  if (state.reviewing) return "Remember I’m here to help if needed.";
  if (state.screen === "arc") {
    if (state.arcStatus === "online") return "Hey, Jemm here. Arc is online — you’re ready for rooms.";
    if (state.arcStatus === "connecting") return "Hey, Jemm here. I’m connecting Arc to the network.";
  }
  return "Hey, Jemm here. I can help you get started.";
}

function jemmSpeakLine() {
  const line = helpstripLine();
  return `<p class="jemm-line" data-jemm-speak data-line="${esc(line)}" aria-live="polite"></p>`;
}

function jemmStrip(line) {
  return `
    <div class="jemm-strip ${state.voiceMode ? "is-listening" : ""}">
      ${jemmOrb("jemm-orb--strip")}
      <div class="jemm-strip__copy">
        <p class="jemm-strip__line jemm-line" data-jemm-speak data-line="${esc(line)}" aria-live="polite"></p>
        <p class="jemm-strip__heard" data-jemm-caption ${state.voiceHeard ? "" : "hidden"}>${state.voiceHeard ? `You: ${esc(state.voiceHeard)}` : ""}</p>
      </div>
      <button type="button" class="jemm-strip__mic ${state.voiceMode ? "is-live" : ""}" data-action="toggle-voice" aria-label="${state.voiceMode ? "Stop listening" : "Talk to Jemm"}">
        <img src="assets/nav/mic.svg" alt="" />
      </button>
    </div>`;
}

function jemmSide() {
  const line = helpstripLine();
  const docked = jemmSideCompetes();
  const collapsed = docked && !state.jemmSideOpen;
  const opened = docked && state.jemmSideOpen;
  if (collapsed) {
    return `
      <aside class="jemm-side is-collapsed ${state.voiceMode ? "is-live" : ""}" aria-label="Jemm">
        <button type="button" class="jemm-side__icon ${state.voiceMode ? "is-live" : ""}" data-action="toggle-jemm-side" aria-expanded="false" aria-label="Open Jemm">
          <img src="assets/nav/jemm.png" alt="" />
        </button>
      </aside>`;
  }
  return `
    <aside class="jemm-side ${opened ? "is-open" : ""}" aria-label="Jemm">
      ${opened ? `<button type="button" class="jemm-side__collapse" data-action="toggle-jemm-side" aria-expanded="true" aria-label="Collapse Jemm"><img src="assets/nav/chevron.svg" alt="" /></button>` : ""}
      <div class="jemm-side__hero">
        ${jemmOrb("jemm-orb--side")}
        <p class="jemm-side__name">Jemm</p>
        <p class="jemm-side__line jemm-line" data-jemm-speak data-line="${esc(line)}" aria-live="polite"></p>
        <p class="jemm-side__heard" data-jemm-caption ${state.voiceHeard ? "" : "hidden"}>${state.voiceHeard ? `You: ${esc(state.voiceHeard)}` : ""}</p>
      </div>
      <button type="button" class="jemm-strip__mic jemm-side__mic ${state.voiceMode ? "is-live" : ""}" data-action="toggle-voice" aria-label="${state.voiceMode ? "Stop listening" : "Talk to Jemm"}">
        <img src="assets/nav/mic.svg" alt="" />
      </button>
    </aside>`;
}

let voiceRec = null;
let voiceWanted = false;
let voiceBusy = false;
let voiceGreeted = false;

function primeMic() {
  navigator.mediaDevices?.getUserMedia({ audio: true }).then((stream) => {
    stream.getTracks().forEach((track) => track.stop());
  }).catch(() => {});
}

let jemmAudio = null;
function audioCtx() {
  const Ctor = window.AudioContext || window.webkitAudioContext;
  if (!Ctor) return null;
  if (!jemmAudio) jemmAudio = new Ctor();
  if (jemmAudio.state === "suspended") jemmAudio.resume();
  return jemmAudio;
}

function playJemmTravel(place) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = audioCtx();
  if (!ctx) return;
  const t0 = ctx.currentTime;
  const down = place === "bottom";
  const side = place === "side";
  const dur = 0.44;
  const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * dur), ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  }
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;
  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.Q.value = 2.4;
  filter.frequency.setValueAtTime(down ? 1900 : side ? 720 : 380, t0);
  filter.frequency.exponentialRampToValueAtTime(down ? 360 : side ? 1100 : 1700, t0 + dur);
  const whoosh = ctx.createGain();
  whoosh.gain.setValueAtTime(0.0001, t0);
  whoosh.gain.exponentialRampToValueAtTime(0.16, t0 + 0.05);
  whoosh.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  noise.connect(filter);
  filter.connect(whoosh);
  whoosh.connect(ctx.destination);
  noise.start(t0);

  const notes = down ? [523.25, 392] : side ? [392, 523.25] : [392, 523.25, 659.25];
  notes.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    const start = t0 + 0.05 + i * 0.08;
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(0.08, start + 0.025);
    g.gain.exponentialRampToValueAtTime(0.0001, start + 0.3);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start(start);
    osc.stop(start + 0.32);
  });
}

function paintJemmVoice() {
  const line = document.querySelector("[data-jemm-speak]");
  const heard = document.querySelector("[data-jemm-caption]");
  const text = helpstripLine();
  if (line) {
    if (line.getAttribute("data-line") !== text) {
      resetJemmSpeech();
      line.setAttribute("data-line", text);
    }
    playJemmType();
  }
  if (heard) {
    heard.hidden = !state.voiceHeard;
    heard.textContent = state.voiceHeard ? `You: ${state.voiceHeard}` : "";
  }
}

let jemmTypeTimer = 0;
let jemmTyped = { key: "", full: "", i: 0, done: false };

function resetJemmSpeech() {
  clearTimeout(jemmTypeTimer);
  jemmTypeTimer = 0;
  jemmTyped = { key: "", full: "", i: 0, done: false };
}

function jemmSpeakKey(line) {
  return [state.reviewing ? "live" : "setup", state.screen, state.jemmPlace, line].join("|");
}

function setJemmTalking(on) {
  document.querySelectorAll(".jemm-orb").forEach((orb) => orb.classList.toggle("is-talking", on));
}

function playJemmType() {
  const el = document.querySelector("[data-jemm-speak]");
  if (!el) {
    setJemmTalking(false);
    return;
  }
  const full = el.getAttribute("data-line") || "";
  if (!full) {
    el.textContent = "";
    setJemmTalking(false);
    return;
  }
  const key = jemmSpeakKey(full);
  if (jemmTyped.key !== key) {
    clearTimeout(jemmTypeTimer);
    jemmTypeTimer = 0;
    jemmTyped = { key, full, i: 0, done: false };
  }
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || jemmTyped.done) {
    el.textContent = full;
    el.classList.remove("is-typing");
    el.classList.add("is-said");
    setJemmTalking(false);
    return;
  }
  el.textContent = full.slice(0, jemmTyped.i);
  el.classList.add("is-typing");
  el.classList.remove("is-said");
  setJemmTalking(true);
  if (jemmTypeTimer) return;
  const tick = () => {
    const node = document.querySelector("[data-jemm-speak]");
    if (!node) {
      jemmTypeTimer = 0;
      setJemmTalking(false);
      return;
    }
    const next = node.getAttribute("data-line") || "";
    if (jemmSpeakKey(next) !== jemmTyped.key) {
      jemmTypeTimer = 0;
      return;
    }
    if (jemmTyped.i >= jemmTyped.full.length) {
      jemmTyped.done = true;
      jemmTypeTimer = 0;
      node.textContent = jemmTyped.full;
      node.classList.remove("is-typing");
      node.classList.add("is-said");
      setJemmTalking(false);
      return;
    }
    jemmTyped.i += 1;
    node.textContent = jemmTyped.full.slice(0, jemmTyped.i);
    const ch = jemmTyped.full[jemmTyped.i - 1] || "";
    jemmTypeTimer = setTimeout(tick, /[.,!?]/.test(ch) ? 120 : 28);
  };
  jemmTypeTimer = setTimeout(tick, 80);
}

function wizardNeighbor(dir) {
  const steps = wizardSteps();
  const i = steps.indexOf(state.screen);
  if (i < 0) return null;
  return steps[i + dir] || null;
}

function jemmAnswer(raw) {
  const t = String(raw || "").toLowerCase().replace(/[?.!,]/g, " ").replace(/\s+/g, " ").trim();
  const name = state.account.first || "there";
  if (!t) return "I didn’t catch that. Say it once more?";
  if (/\b(stop|quiet|never mind|cancel|goodbye|good bye|that's all|thats all)\b/.test(t)) {
    later(() => {
      stopJemmListen();
      setState({ voiceMode: false, voiceHeard: state.voiceHeard, jemmReply: "Okay. I’ll stay here if you need me." });
    }, 50);
    return "Okay. I’ll stay here if you need me.";
  }
  if (/^(hi|hello|hey)\b/.test(t) || /\bhi jemm\b/.test(t)) {
    return `Hey ${name}. I’m listening. You can say next, back, what’s the status, or tell me what you’re stuck on.`;
  }
  if (/\b(next|continue|go on|keep going|next step)\b/.test(t)) {
    const dest = wizardNeighbor(1);
    if (!dest) return "That’s the last setup step. Say dashboard if you want to head home.";
    if (state.screen === "arc" && state.arcStatus !== "online") {
      return "Arc isn’t online yet. Click the status card to skip, or finish power and ethernet first.";
    }
    later(() => go(dest), 700);
    return `Got it. Taking you to ${STEP_META[dest]?.label || dest}.`;
  }
  if (/\b(back|previous|go back)\b/.test(t)) {
    const dest = wizardNeighbor(-1);
    if (!dest) return "You’re on the first step. Nothing to go back to.";
    later(() => go(dest), 700);
    return "Backing up one step.";
  }
  if (/\b(client|clients|portfolio)\b/.test(t)) {
    later(() => go("clients"), 700);
    return "Opening clients so you can check properties before they call.";
  }
  if (/\b(insight|insights|sales|revenue|cashback)\b/.test(t)) {
    later(() => go("insights"), 700);
    return "Opening insights for Arc sales and fleet numbers.";
  }
  if (/\b(home|dashboard)\b/.test(t)) {
    later(() => go("dashboard"), 700);
    return "Taking you to home.";
  }
  if (/\b(status|alert|offline|what's wrong|whats wrong|health)\b/.test(t)) {
    const alerts = liveAlerts();
    if (!alerts.length) return "Everything I’m watching looks healthy. No offline devices right now.";
    const first = alerts[0];
    return `${alerts.length} alert${alerts.length === 1 ? "" : "s"}. ${first.device} in ${first.room} at ${first.name} is offline.`;
  }
  if (state.screen === "account") {
    return "This is your integrator account. Fill name, email, and company, then say next.";
  }
  if (state.screen === "property") {
    return state.addingProperty
      ? "Add this property’s name and address. Say next when the form looks right."
      : "Give the property a name and address so Arc knows where it lives. Say next when you’re ready.";
  }
  if (state.screen === "arc") {
    if (state.arcStatus === "online") return "Arc is online. Say next to map rooms.";
    return "Power on Arc, plug in PoE ethernet, and wait for the green LED. Click the status card if you want to skip the wait.";
  }
  if (state.screen === "rooms") {
    return "Drop a floorplan or say add floor. Pick a room on the right to place devices. Say next when the layout looks good.";
  }
  if (state.screen === "devices") {
    return "I’m matching devices to rooms. Open a device to tweak it, or say next to finish.";
  }
  if (state.screen === "clients") {
    return "Clients is your book of business. Use the tiles for counts and alerts, then open a property from the table.";
  }
  if (state.screen === "insights") {
    return "Insights has Arc sales, cashback tiers, and a live snapshot of rooms, devices, and alerts.";
  }
  return `I heard “${raw}”. I’m a simulated Jemm on this machine — try next, back, status, or tell me which step you’re on.`;
}

function jemmSpeak(_text, then) {
  later(() => {
    voiceBusy = false;
    then?.();
  }, 220);
}

function handleVoiceTranscript(text, isFinal) {
  state.voiceHeard = text;
  paintJemmVoice();
  if (!isFinal || voiceBusy) return;
  const reply = jemmAnswer(text);
  state.jemmReply = reply;
  state.voiceError = "";
  paintJemmVoice();
  voiceBusy = true;
  try { voiceRec?.stop(); } catch { /* restart after speech */ }
  jemmSpeak(reply, () => {
    if (voiceWanted && state.voiceMode) startJemmListen();
  });
}

function startJemmListen() {
  const Ctor = speechRecCtor();
  if (!Ctor) {
    state.voiceError = "Voice needs Chrome or Safari. This browser can’t listen.";
    paintJemmVoice();
    return;
  }
  voiceWanted = true;
  if (voiceBusy) return;
  if (voiceRec) {
    try { voiceRec.start(); } catch { /* already started */ }
    return;
  }
  const rec = new Ctor();
  rec.lang = "en-US";
  rec.continuous = true;
  rec.interimResults = true;
  rec.maxAlternatives = 1;
  rec.onresult = (event) => {
    let interim = "";
    let finalText = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const chunk = event.results[i][0].transcript;
      if (event.results[i].isFinal) finalText += chunk;
      else interim += chunk;
    }
    handleVoiceTranscript((finalText || interim).trim(), Boolean(finalText.trim()));
  };
  rec.onerror = (event) => {
    if (event.error === "not-allowed" || event.error === "service-not-allowed") {
      voiceWanted = false;
      state.voiceError = "Microphone is blocked. Allow mic for localhost and tap Jemm again.";
      state.voiceMode = false;
      paintJemmVoice();
      setState({ voiceMode: false, voiceError: state.voiceError });
      return;
    }
    if (event.error === "no-speech" || event.error === "aborted") return;
    state.voiceError = "I lost the mic for a second. Keep talking.";
    paintJemmVoice();
  };
  rec.onend = () => {
    if (voiceRec !== rec) return;
    if (voiceWanted && state.voiceMode && !voiceBusy) {
      later(() => {
        if (voiceWanted && state.voiceMode && !voiceBusy && voiceRec === rec) {
          try { rec.start(); } catch { /* ignore */ }
        }
      }, 180);
    }
  };
  voiceRec = rec;
  try {
    rec.start();
  } catch {
    /* start can throw if a previous instance is ending */
  }
}

function stopJemmListen() {
  voiceWanted = false;
  voiceBusy = false;
  voiceGreeted = false;
  try { voiceRec?.abort(); } catch { /* ignore */ }
  try { voiceRec?.stop(); } catch { /* ignore */ }
  voiceRec = null;
}

function syncVoiceEngine() {
  if (!state.voiceMode) {
    stopJemmListen();
    return;
  }
  if (!voiceGreeted) {
    voiceGreeted = true;
    voiceWanted = true;
    state.jemmReply = "";
    paintJemmVoice();
  }
  startJemmListen();
}

function jemmGem(size = "md", withVideo = false) {
  return `
    <div class="jemm-gem jemm-gem--${size}${withVideo ? " is-live" : ""}" aria-hidden="true">
      <span class="jemm-gem__glow"></span>
      ${withVideo ? `
        <video id="jemm-arc-gem" class="jemm-gem__video" muted loop playsinline>
          <source src="assets/hi-jemm.mp4" type="video/mp4" />
        </video>` : ""}
      <svg class="jemm-gem__face" viewBox="0 0 64 72" fill="none">
        <defs>
          <linearGradient id="jemmGemFill" x1="12" y1="4" x2="56" y2="68">
            <stop offset="0%" stop-color="#9fffd8"/>
            <stop offset="42%" stop-color="#00d58c"/>
            <stop offset="100%" stop-color="#059161"/>
          </linearGradient>
          <linearGradient id="jemmGemEdge" x1="32" y1="0" x2="32" y2="72">
            <stop offset="0%" stop-color="#e9fff6"/>
            <stop offset="50%" stop-color="#00d58c"/>
            <stop offset="100%" stop-color="#047a52"/>
          </linearGradient>
        </defs>
        <path class="jemm-gem__body" d="M32 3.5C35.8 3.5 58 27.2 58 32.2C58 37.2 35.8 68.5 32 68.5C28.2 68.5 6 37.2 6 32.2C6 27.2 28.2 3.5 32 3.5Z" fill="url(#jemmGemFill)" stroke="url(#jemmGemEdge)" stroke-width="2.4"/>
        <path d="M20 26.5C23.2 22.8 27.2 22.8 30.2 26.2" stroke="#04281f" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M33.8 26.2C36.8 22.8 40.8 22.8 44 26.5" stroke="#04281f" stroke-width="2.4" stroke-linecap="round"/>
        <g class="jemm-gem__eyes">
          <path d="M21.5 31.5C24.6 35.2 27.8 35.4 31 31.5" stroke="#04281f" stroke-width="2.6" stroke-linecap="round"/>
          <path d="M33 31.5C36.2 35.4 39.4 35.2 42.5 31.5" stroke="#04281f" stroke-width="2.6" stroke-linecap="round"/>
        </g>
        <path d="M23 43C27.4 49.2 36.6 49.2 41 43" stroke="#04281f" stroke-width="2.8" stroke-linecap="round"/>
        <path class="jemm-gem__highlight" d="M38 14C44 20 48 27 47.2 32" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.55"/>
      </svg>
      <span class="jemm-gem__sheen"></span>
    </div>`;
}

function propertyOwner(p = state.property) {
  return p.owner || [state.account.first, state.account.last].filter(Boolean).join(" ") || "—";
}

function propertyAccessKey(p = state.property) {
  return p.accessKey || "—";
}

function propertyCard() {
  const p = state.property;
  const name = p.name || "New property";
  const type = p.type === "commercial" ? "Commercial" : "Residential";
  const s = state.arcStatus;
  const chipClass = s === "online" ? "is-online" : s === "connecting" ? "is-connecting" : "is-offline";
  const chipLabel = s === "online" ? "Online" : s === "connecting" ? "Connecting" : "Offline";
  const line1 = [p.street, p.unit].filter(Boolean).join(", ") || "Address not set";
  const line2 = [p.city, p.state, p.zip].filter(Boolean).join(", ");
  const address = [line1, line2].filter(Boolean).join(", ");
  const cover = propertyCover(p);
  return `
    <section class="prop-hero">
      <div class="prop-hero__cover${cover ? " has-photo" : ""}">
        ${cover ? `<img src="${esc(cover)}" alt="" />` : ""}
        <div class="prop-hero__cover-row">
          <h2>${esc(name)}</h2>
          <div class="prop-hero__actions">
            <label class="prop-hero__photo">
              <input id="cover-input" type="file" accept="image/png,image/jpeg,image/webp,image/gif" hidden />
              ${cover ? "Change photo" : "Add photo"}
            </label>
            ${cover ? `<button type="button" class="prop-hero__photo" data-action="clear-cover">Remove photo</button>` : ""}
            <button type="button" class="prop-hero__3d" data-action="edit-property" aria-label="Edit property details">
              <img src="assets/rooms/icon-3d.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div class="prop-hero__details">
        <div class="prop-hero__grid">
          <div>
            <span>Address</span>
            <p>${esc(address)}</p>
          </div>
          <div>
            <span>Jemm Arc status</span>
            <p><span class="chip ${chipClass}"><i></i>${chipLabel}</span></p>
          </div>
          <div>
            <span>Owner info</span>
            <p class="prop-hero__owner">
              <em>${esc(propertyOwner(p))}</em>
              <span class="pair-chip">${esc(p.ownerRole || "Admin")}</span>
            </p>
          </div>
          <div>
            <span>Property type</span>
            <p>${esc(type)}</p>
          </div>
          <div>
            <span>Access key</span>
            <p>${esc(propertyAccessKey(p))}</p>
          </div>
        </div>
      </div>
    </section>`;
}

function account() {
  const a = state.account;
  return layout(`
    <div class="wizard wizard--account">
      ${kicker("First, let’s get your account details.")}
      <div class="wizard__body">
        <div class="form-grid">
          ${field("First", "account.first", a.first)}
          ${field("Last", "account.last", a.last)}
          ${field("Email", "account.email", a.email)}
          <div class="field-spacer" aria-hidden="true"></div>
          ${field("Company/dealership name", "account.company", a.company, "e.g., Apex Smart Home Solutions")}
          ${field("License ID/number", "account.license", a.license, "Enter here")}
          ${passField("Password", "account.password", a.password, "showPass")}
          ${passField("Confirm password", "account.confirm", a.confirm, "showPass2")}
        </div>
      </div>
    </div>
  `, { showCta: true, prev: "welcome", next: "property" });
}

function propertyFieldOpts(key, errors) {
  const bind = `property.${key}`;
  const empty = !!errors[key];
  const touched = !!(state.formTouched || {})[bind];
  return {
    required: true,
    error: touched && empty ? errors[key] : "",
    hint: empty ? "Required" : "",
  };
}

function property() {
  const p = state.property;
  const errors = propertyFieldErrors(p);
  return layout(`
    <div class="wizard">
      ${kicker(state.addingProperty
        ? "Add the property details for this integration"
        : "Now let’s create the property where we’ll do the integration")}
      <div class="wizard__body">
        ${typePickHtml(p, "set-property-type")}
        <div class="form-grid form-grid--property">
          ${field("Property name", "property.name", p.name, "e.g. Christo’s home", propertyFieldOpts("name", errors))}
          <label class="field">
            <span class="field__label">Time zone</span>
            <select data-bind="property.timezone">
              ${TIMEZONES.map((z) => `<option ${z === p.timezone ? "selected" : ""}>${z}</option>`).join("")}
            </select>
          </label>
          ${field("Street address", "property.street", p.street, "e.g. 1234 Main Street", propertyFieldOpts("street", errors))}
          ${field("Additional details", "property.unit", p.unit, "e.g Apt, Unit, Ste")}
          ${field("City", "property.city", p.city, "e.g. New York City, Miami, Los Angeles", propertyFieldOpts("city", errors))}
          ${field("State/province", "property.state", p.state, "e.g. Florida")}
          ${field("ZIP / postal code", "property.zip", p.zip, "e.g. 33014")}
          ${field("Owner name", "property.owner", p.owner, "e.g. Christo Georgiv")}
          <label class="field">
            <span class="field__label">Owner role</span>
            <select data-bind="property.ownerRole">
              ${["Admin", "Owner", "Guest"].map((role) => `<option ${role === (p.ownerRole || "Admin") ? "selected" : ""}>${role}</option>`).join("")}
            </select>
          </label>
          ${field("Access key", "property.accessKey", p.accessKey, "e.g. 0927495")}
        </div>
      </div>
    </div>
  `, { showCta: true, prev: state.reviewing ? "rooms" : state.addingProperty ? "dashboard" : "account", next: state.reviewing || state.addingProperty ? "rooms" : "arc", nextDisabled: !propertyDetailsReady(p) });
}

function arc() {
  const s = state.arcStatus;
  const chipClass = s === "online" ? "is-online" : s === "connecting" ? "is-connecting" : "is-offline";
  const chipLabel = s === "online" ? "Online" : s === "connecting" ? "Connecting" : "Offline";
  const title = s === "online" ? "Jemm Arc is online" : s === "connecting" ? "Connecting to Jemm Arc" : "Searching for Jemm Arc";
  const copy =
    s === "online"
      ? "Arc is on the property network. You can continue to rooms and layout."
      : "Follow steps 1 and 2 to ensure Jemm Arc is connected to the network. This panel updates to show current status.";
  return layout(`
    <div class="wizard">
      ${kicker("Next, let’s setup the Jemm Arc to the property network.")}
      <div class="wizard__body">
        <div class="arc-layout">
          <div>
            <div class="step-block">
              <div class="num">1</div>
              <div>
                <h3>Turn on Jemm Arc</h3>
                <p>Press the power button located on top of the vertical Jemm Arc unit. Ensure the front status LED lights up solid green before proceeding to the next step.</p>
                <p style="margin-top:10px">Note: If the status light stays off, check that your power outlet is working and the supply cable is securely attached.</p>
                <div class="step-shot"><img src="assets/step-power.png" alt="Press the power button on Jemm Arc" /></div>
              </div>
            </div>
            <div class="step-block">
              <div class="num">2</div>
              <div>
                <h3>Connect Ethernet (PoE+)</h3>
                <p>Plug one end of a Cat6 cable into a PoE+ port on your managed switch, and insert the other end firmly into the rear ethernet port of the Jemm Arc.</p>
                <p style="margin-top:10px">Make sure the cable clicks securely into place at both ends.</p>
                <div class="step-shot"><img src="assets/step-ethernet.png" alt="Connect Ethernet to Jemm Arc" /></div>
              </div>
            </div>
          </div>
          <aside class="status-card arc-status" data-action="skip-arc">
            <div class="status-card__head">
              <h3>Live status</h3>
              <span class="chip ${chipClass}"><i></i>${chipLabel}</span>
            </div>
            <div class="radar ${s === "online" ? "is-online" : ""} ${s === "connecting" ? "is-busy" : ""}">
              <div class="radar__ring"></div>
              <div class="radar__ring"></div>
              <div class="radar__ring"></div>
              <img class="radar__gem" src="assets/nav/gem.png" alt="Jemm Arc" />
            </div>
            <h4>${title}</h4>
            <p>${copy}</p>
          </aside>
        </div>
      </div>
    </div>
  `, { showCta: true, prev: "property", next: "rooms", nextDisabled: s !== "online" });
}

function propertyViewTabs() {
  if (!state.reviewing && !(state.loggedIn && !state.addingProperty)) return "";
  const view = state.propertyView || "rooms";
  return `
    <div class="prop-views" role="tablist" aria-label="Property view">
      <button type="button" role="tab" aria-selected="${view === "rooms"}" class="${view === "rooms" ? "is-on" : ""}" data-action="property-view" data-value="rooms">Rooms</button>
      <button type="button" role="tab" aria-selected="${view === "devices"}" class="${view === "devices" ? "is-on" : ""}" data-action="property-view" data-value="devices">Devices</button>
    </div>`;
}

function propertyScenesView() {
  return roomsScenesStrip();
}

function propertyDevicesView() {
  const groups = groupDeviceList(state.devices);
  if (!groups.length) return `<p class="muted-note">No devices in this property yet.</p>`;
  return groups.map((g) => deviceOnOffSections(g, (d) => deviceCard(d, state.roomView === "grid" ? "grid" : "list"), "device-section", state.roomView === "grid" ? "device-tiles" : "device-list")).join("");
}

function rooms() {
  const has = state.floors.length > 0;
  const floor = state.floors[state.selectedFloor];
  const room = has ? floor.rooms[state.selectedRoom] : null;
  const q = state.search.toLowerCase();
  const title = state.addingProperty || state.reviewing ? "Rooms and layout" : "Let’s add the rooms and layout of the property";
  const prev = state.reviewing ? "dashboard" : state.addingProperty ? "property" : "arc";
  return layout(`
    <div class="wizard wizard--property">
      ${kicker(title)}
      <div class="wizard__body wizard__body--fill wizard__body--rooms">
        ${propertyCard()}
        ${roomsScenesStrip()}
        <div class="rooms-pin">
          ${roomsActionBar()}
          ${has ? roomsWorkspace(floor, room, q) : roomsEmptyHtml()}
        </div>
        <div class="rooms-pin-spacer" aria-hidden="true"></div>
      </div>
    </div>
  `, { showCta: true, prev, next: "devices", nextDisabled: !has });
}

function devices() {
  const rooms = allRooms();
  const scanning = state.deviceScan !== "found";
  return layout(`
    <div class="wizard wizard--property">
      ${kicker(state.addingProperty ? "Place devices in this property" : "Finally, let’s place devices in the building")}
      <div class="wizard__body wizard__body--fill">
        ${propertyCard()}
        ${scanning ? scanRadarHtml(state.scanStatus || "Jemm Arc is discovering lights, shades, climate, and Jemm devices.") : `
          <p style="color:var(--muted);text-align:center">${state.devices.length} devices found. Assign each one to a room.</p>
          <div class="device-grid">
            ${state.devices.map((d, i) => `
              <article class="device">
                <button type="button" class="device__icon" data-action="open-device" data-id="${esc(d.id)}"><img src="${deviceIcon(d)}" alt="" /></button>
                <div>
                  <h4>${esc(d.name)}</h4>
                  <p>${d.kind === "arc" ? "Hub · Online" : d.on === false ? "Off" : "Ready to pair"}</p>
                </div>
                <select data-device="${i}">
                  ${rooms.map((r) => `<option ${r === d.room ? "selected" : ""}>${esc(r)}</option>`).join("")}
                </select>
              </article>
            `).join("")}
          </div>
        `}
      </div>
    </div>
  `, { showCta: true, prev: "rooms", next: state.reviewing ? "dashboard" : "done", nextDisabled: scanning });
}

function done() {
  const name = state.property.name || "this property";
  return layout(`
    <div class="done">
      <div class="jemm-chip"><img src="assets/jemm-face.png" alt="Jemm" /></div>
      <h1 class="guide-text">${esc(name)} is ready.</h1>
      <p>Account, property, Jemm Arc, rooms, and devices are all on the same map. You can come back anytime to add another building.</p>
      <button class="btn btn--next" data-go="dashboard">Go to portal home</button>
    </div>
  `, { landing: true });
}

function dashActivity() {
  const items = [];
  const draft = state.draft || loadDraft();
  if (draft) {
    const step = stepProgress(draft.screen, !!draft.addingProperty);
    items.push({
      kind: "draft",
      id: null,
      action: "resume-draft",
      title: draft.property?.name || "Untitled property",
      body: step ? `Setup paused at ${step.label} (${step.n}/${step.total})` : "Draft in progress",
      when: "In progress",
    });
  }
  liveAlerts().forEach((a) => {
    items.push({
      kind: "alert",
      id: a.id,
      title: a.name,
      body: a.body,
      when: "Needs attention",
    });
  });
  modeProperties().forEach((p) => {
    if ((p.arcStatus || "offline") !== "online") {
      items.push({
        kind: "alert",
        id: p.id,
        title: propertyName(p),
        body: "Jemm Arc is offline",
        when: p.lastCheck || "—",
      });
    }
    if (p.note) {
      items.push({
        kind: "note",
        id: p.id,
        title: propertyName(p),
        body: p.note,
        when: p.lastCheck || "—",
      });
    }
    items.push({
      kind: "check",
      id: p.id,
      title: propertyName(p),
      body: `Remote check · Arc ${p.arcStatus || "offline"}`,
      when: p.lastCheck || "—",
    });
  });
  const seen = new Set();
  return items.filter((it) => {
    const key = `${it.kind}:${it.id}:${it.body}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 8);
}

function dashFeedRow(item) {
  const action = item.action
    ? `data-action="${esc(item.action)}"`
    : item.id
      ? `data-action="open-property" data-id="${esc(item.id)}"`
      : "";
  return `
    <button type="button" class="dash-feed__row is-${item.kind}" ${action}>
      <span class="status-dot status-dot--${item.kind === "alert" ? "alert" : item.kind === "draft" ? "warn" : "ok"}"><i></i></span>
      <span>
        <strong>${esc(item.title)}</strong>
        <em>${esc(item.body)}</em>
      </span>
      <b>${esc(item.when)}</b>
    </button>`;
}

function dashboard() {
  const draft = state.draft || loadDraft();
  const draftStep = draft ? stepProgress(draft.screen, !!draft.addingProperty) : null;
  const draftName = draft?.property?.name || "Untitled property";
  const mode = currentMode();
  const all = modeProperties();
  const q = state.navSearch.trim().toLowerCase();
  const filter = state.homeFilter || "all";
  const lives = all.filter((p) => {
    if (!q) return true;
    const det = p.details || {};
    return [det.name, p.name, det.street, det.city, det.state].join(" ").toLowerCase().includes(q);
  });
  const liveRooms = all.reduce((n, p) => n + (p.floors || []).reduce((a, f) => a + (f.rooms?.length || 0), 0), 0);
  const liveDevices = all.reduce((n, p) => n + (p.devices?.length || 0), 0);
  const online = all.filter((p) => p.arcStatus === "online").length;
  const alerts = liveAlerts();
  const offline = all.filter((p) => (p.arcStatus || "offline") !== "online");
  const health = lives.map(liveHealth);
  const attention = health.filter((h) => h.level !== "ok");
  const shown = filter === "alert" ? health.filter((h) => h.level !== "ok") : health;
  const notes = all.filter((p) => p.note);
  const count = all.length;
  const empty = !draft && !all.length;
  const here = homeHereCard();
  const hereInMode = !!here;
  const activity = dashActivity();
  const notices = [
    ...(draft ? [{
      kind: "draft",
      id: null,
      action: "resume-draft",
      title: `Finish ${draftName}`,
      body: draftStep ? `${draftStep.label} (${draftStep.n}/${draftStep.total})` : "Draft in progress",
      when: "Resume",
    }] : []),
    ...notes.map((p) => ({
      kind: "note",
      id: p.id,
      title: propertyName(p),
      body: p.note,
      when: p.lastCheck || "—",
    })),
  ];
  const critical = [
    ...alerts.map((a) => ({
      kind: "alert",
      id: a.id,
      title: a.name,
      body: a.body,
      when: "Open",
    })),
    ...offline.map((p) => ({
      kind: "alert",
      id: p.id,
      title: propertyName(p),
      body: "Jemm Arc is offline",
      when: p.lastCheck || "Open",
    })),
  ];
  const critKey = new Set();
  const criticalUnique = critical.filter((it) => {
    const key = `${it.id}:${it.body}`;
    if (critKey.has(key)) return false;
    critKey.add(key);
    return true;
  });
  return layout(`
    <div class="dash dash--portal">
      <div class="dash__head">
        <div>
          <p class="dash__live"><span class="live-dot ${attention.length ? "is-warn" : ""}"></span> Live · <span data-live-clock></span></p>
          <h1>Welcome back, ${esc(state.account.first)}.</h1>
          <p>${esc(state.account.company || "Integrator")} · ${esc(mode.label)} · ${count} propert${count === 1 ? "y" : "ies"}</p>
        </div>
        <button class="btn btn--next" data-action="new-property">Add property</button>
      </div>
      <div class="stat-grid">
        <button type="button" class="dash-tile ${criticalUnique.length ? "is-alert" : ""}" data-action="dash-jump" data-target="dash-attention" data-filter="alert">
          <div class="dash-tile__top">
            <img src="assets/nav/bell.svg" alt="" />
            <h3>Needs attention</h3>
          </div>
          <strong>${criticalUnique.length}</strong>
          <p>${criticalUnique.length ? (criticalUnique[0].body) : "All properties look quiet"}</p>
        </button>
        <button type="button" class="dash-tile" data-action="dash-jump" data-target="dash-notifications">
          <div class="dash-tile__top">
            <img src="assets/nav/help.svg" alt="" />
            <h3>Notifications</h3>
          </div>
          <strong>${notices.length}</strong>
          <p>${notices.length ? (draft ? "Draft waiting, plus notes" : "Notes across the fleet") : "Nothing waiting"}</p>
        </button>
        <button type="button" class="dash-tile" data-action="dash-jump" data-target="dash-properties" data-filter="all">
          <div class="dash-tile__top">
            <img src="assets/nav/icon-home.svg" alt="" />
            <h3>Properties</h3>
          </div>
          <strong>${count}</strong>
          <p>${online}/${count || 0} Arc online · ${liveRooms} rooms</p>
        </button>
        <button type="button" class="dash-tile" data-action="dash-jump" data-target="dash-activity">
          <div class="dash-tile__top">
            <img src="assets/icon-arc.svg" alt="" />
            <h3>Fleet</h3>
          </div>
          <strong>${liveDevices}</strong>
          <p>${alerts.length ? `${alerts.length} device alert${alerts.length === 1 ? "" : "s"}` : "Devices across this mode"}</p>
        </button>
      </div>
      ${draft ? `
        <button type="button" class="home-draft" data-action="resume-draft">
          <span>
            <strong>Finish ${esc(draftName)}</strong>
            <em>${draftStep ? `${esc(draftStep.label)} (${draftStep.n}/${draftStep.total})` : "Draft in progress"}</em>
          </span>
          <span class="pill pill--draft">Resume</span>
        </button>` : ""}
      ${hereInMode ? `
        <section class="home-here">
          <div>
            <p class="home-here__kicker">${here.integrating ? "You’re integrating" : "Current property"}</p>
            <h2>${esc(here.name)}</h2>
            <p class="home-here__room">Now in <strong>${esc(here.here)}</strong></p>
          </div>
          <div class="home-here__actions">
            ${here.id
              ? `<button type="button" class="btn btn--ghost" data-action="open-property" data-id="${esc(here.id)}">Continue in this room</button>`
              : `<button type="button" class="btn btn--ghost" data-go="rooms">Continue in this room</button>`}
            <button type="button" class="btn btn--next ${state.deviceScan === "scanning" ? "is-busy" : ""}" data-action="sync-devices"${here.id ? ` data-id="${esc(here.id)}"` : ""}${state.deviceScan === "scanning" ? " disabled" : ""}>
              ${state.deviceScan === "scanning" ? `<span class="btn__spin" aria-hidden="true"></span>` : ""}
              Sync devices
            </button>
          </div>
        </section>` : ""}
      <div class="dash-split">
        <section class="dash-panel" id="dash-attention">
          <div class="dash-panel__head">
            <h2>Needs immediate attention</h2>
            <span>${criticalUnique.length ? `${criticalUnique.length} live` : "Clear"}</span>
          </div>
          ${criticalUnique.length
            ? `<div class="dash-feed">${criticalUnique.map(dashFeedRow).join("")}</div>`
            : `<p class="widget-empty">No Arc or device faults in ${esc(mode.label.toLowerCase())} mode.</p>`}
        </section>
        <section class="dash-panel" id="dash-notifications">
          <div class="dash-panel__head">
            <h2>Notifications</h2>
            <span>${notices.length ? `${notices.length}` : "Clear"}</span>
          </div>
          ${notices.length
            ? `<div class="dash-feed">${notices.map(dashFeedRow).join("")}</div>`
            : `<p class="widget-empty">No drafts or property notes right now.</p>`}
        </section>
      </div>
      ${empty ? `
        <div class="empty">
          <img src="assets/ill-empty.png" alt="" />
          <h3>No ${esc(mode.label.toLowerCase())} properties yet</h3>
          <p>Add a property from this mode, or switch modes in the top bar.</p>
          <button class="btn btn--ghost" data-action="new-property">Add property</button>
        </div>` : `
        <section class="dash-panel" id="dash-properties">
          <div class="dash-panel__head">
            <div>
              <h2>Properties</h2>
              <p>${shown.length} of ${lives.length} in this mode</p>
            </div>
            <div class="seg seg--sm">
              <button type="button" class="${filter === "all" ? "is-on" : ""}" data-action="home-filter" data-value="all">All</button>
              <button type="button" class="${filter === "alert" ? "is-on" : ""}" data-action="home-filter" data-value="alert">Needs attention</button>
            </div>
          </div>
          ${shown.length ? `
            <div class="data-wrap">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Status</th>
                    <th>Arc</th>
                    <th>Fleet</th>
                    <th>Last check</th>
                    <th>Callout</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  ${shown.map((h) => {
                    const p = lives.find((x) => x.id === h.id);
                    const loc = [p?.details?.city, p?.details?.state].filter(Boolean).join(", ");
                    return `
                      <tr class="data-table__row is-${h.level}" data-action="open-property" data-id="${esc(h.id)}">
                        <td>
                          <strong>${esc(h.name)}</strong>
                          <span class="is-quiet">${esc(h.type)}${loc ? ` · ${esc(loc)}` : ""}</span>
                        </td>
                        <td>${statusDot(h.level)}</td>
                        <td>${esc(h.arc)}</td>
                        <td>${h.rooms} rm · ${h.healthy}/${h.devices} dv</td>
                        <td>${esc(p?.lastCheck || "—")}</td>
                        <td class="data-callout">${esc(p?.note || (h.alerts[0] ? `${h.alerts[0].name} needs a look` : "—"))}</td>
                        <td class="data-actions">
                          <button type="button" data-action="open-property" data-id="${esc(h.id)}">Open</button>
                          <button type="button" data-action="ping-property" data-id="${esc(h.id)}">Ping</button>
                        </td>
                      </tr>`;
                  }).join("")}
                </tbody>
              </table>
            </div>` : `<p class="muted-note">${q ? `No properties match “${esc(state.navSearch)}”.` : "Nothing in this filter."}</p>`}
        </section>`}
      <section class="dash-panel" id="dash-activity">
        <div class="dash-panel__head">
          <h2>Recent activity</h2>
          <span>${activity.length ? `${activity.length}` : "—"}</span>
        </div>
        ${activity.length
          ? `<div class="dash-feed">${activity.map(dashFeedRow).join("")}</div>`
          : `<p class="widget-empty">Activity across your properties will show up here.</p>`}
      </section>
    </div>
  `, { landing: true });
}

function stepper(progress) {
  if (!progress) return "";
  const { n, total } = progress;
  return `
    <div class="stepper">
      <div class="stepper__bars">
        ${Array.from({ length: total }, (_, i) => `<div class="stepper__bar ${i < n ? "is-done" : ""}"></div>`).join("")}
      </div>
      <div class="stepper__label">(${n}/${total})</div>
    </div>`;
}

function propertyFieldErrors(p = state.property) {
  const errors = {};
  if (!String(p?.name || "").trim()) errors.name = "Enter a property name.";
  if (!String(p?.street || "").trim()) errors.street = "Enter a street address.";
  if (!String(p?.city || "").trim()) errors.city = "Enter a city.";
  return errors;
}

function propertyDetailsReady(p = state.property) {
  const errors = propertyFieldErrors(p);
  return !errors.name && !errors.street && !errors.city;
}

const PROPERTY_REQUIRED = ["property.name", "property.street", "property.city"];

function syncPropertyNext() {
  const btn = document.querySelector("[data-cta=next]");
  if (!btn || state.screen !== "property") return;
  const ready = propertyDetailsReady();
  btn.disabled = !ready;
  btn.classList.toggle("is-disabled", !ready);
}

function syncPropertyField(input) {
  const bind = input?.dataset?.bind;
  if (!PROPERTY_REQUIRED.includes(bind)) return;
  const fieldEl = input.closest(".field");
  if (!fieldEl) return;
  const key = bind.split(".")[1];
  const empty = !String(input.value || "").trim();
  const touched = !!(state.formTouched || {})[bind];
  fieldEl.classList.toggle("is-invalid", touched && empty);
  fieldEl.classList.toggle("is-required", empty);
  input.toggleAttribute("aria-invalid", touched && empty);
  let msg = fieldEl.querySelector(".field__error, .field__hint");
  if (!empty) {
    msg?.remove();
    return;
  }
  const text = touched ? (propertyFieldErrors()[key] || "Required") : "Required";
  const cls = touched ? "field__error" : "field__hint";
  if (!msg) {
    msg = document.createElement("span");
    fieldEl.appendChild(msg);
  }
  msg.className = cls;
  msg.id = `err-${bind.replaceAll(".", "-")}`;
  msg.textContent = text;
}

function field(label, bind, value, placeholder = "", opts = {}) {
  const required = !!opts.required;
  const error = opts.error || "";
  const hint = !error && opts.hint ? opts.hint : "";
  const errId = `err-${bind.replaceAll(".", "-")}`;
  return `
    <label class="field ${error ? "is-invalid" : required && !String(value || "").trim() ? "is-required" : ""}">
      <span class="field__label">${label}${required ? `<span class="field__req" title="Required">*</span>` : ""}</span>
      <input data-bind="${bind}" value="${esc(value)}" placeholder="${esc(placeholder)}" ${required ? "aria-required=\"true\"" : ""} ${error ? `aria-invalid="true" aria-describedby="${errId}"` : ""} />
      ${error ? `<span class="field__error" id="${errId}">${esc(error)}</span>` : hint ? `<span class="field__hint">${esc(hint)}</span>` : ""}
    </label>`;
}

function passField(label, bind, value, flag) {
  const show = state[flag];
  return `
    <label class="field field--password">
      <span class="field__label">${label}</span>
      <input data-bind="${bind}" type="${show ? "text" : "password"}" value="${esc(value)}" />
      <button class="eye" type="button" data-action="toggle-flag" data-flag="${flag}" aria-label="Show password">
        <img src="assets/icon-eye.svg" alt="" />
      </button>
    </label>`;
}

function esc(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function profile() {
  const a = state.account;
  return layout(`
    <div class="app-page">
      <h1>Profile</h1>
      <p>Your integrator account. Click save when you’re done.</p>
      <div class="form-grid">
        ${field("First", "account.first", a.first)}
        ${field("Last", "account.last", a.last)}
        ${field("Email", "account.email", a.email)}
        <div></div>
        ${field("Company/dealership name", "account.company", a.company, "e.g., Apex Smart Home Solutions")}
        ${field("License ID/number", "account.license", a.license, "Enter here")}
      </div>
      <button type="button" class="btn btn--next" data-action="save-profile">Save profile</button>
    </div>
  `, { landing: true });
}

function settings() {
  return layout(`
    <div class="app-page">
      <h1>Settings</h1>
      <p>Light mode uses Coconut surfaces, Dark Steel type, and Emerald. Dark mode uses Ink, Charcoal, and Neon Emerald. Switch themes with the sun and moon in the top bar.</p>
      <h3 class="settings-h">Jemm</h3>
      <p>The Jemm button in the top-right turns Jemm on or off. Tap the thumbnail on the page to move Jemm between the top and bottom of the content.</p>
      <button type="button" class="btn btn--ghost" data-go="profile" style="width:fit-content">Edit profile</button>
    </div>
  `, { landing: true });
}

const HARDWARE_SKUS = [
  { id: "arc", label: "Arc" },
  { id: "remote", label: "Remote" },
  { id: "mic", label: "Mic" },
  { id: "keypad", label: "Keypad" },
  { id: "camera", label: "Camera" },
  { id: "speaker", label: "Speaker" },
];
const PLATFORM_PLANS = [
  { id: "legacy", label: "Legacy" },
  { id: "lifetime", label: "Lifetime" },
  { id: "subscription", label: "Subscription" },
];
const HARDWARE_PRICE = { arc: 2499, remote: 199, mic: 349, keypad: 249, camera: 429, speaker: 599 };
const CASHBACK_TIERS = [
  { n: 1, pct: 2, min: 2000 },
  { n: 2, pct: 3, min: 5000 },
  { n: 3, pct: 4, min: 12000 },
  { n: 4, pct: 5, min: 25000 },
  { n: 5, pct: 7, min: 50000 },
];
const PROPERTY_SALES = {
  "p-christo": {
    hardware: { arc: 1, remote: 1, mic: 1, keypad: 0, camera: 1, speaker: 0 },
    plan: "subscription",
    platform: 348,
    booked: [0, 0, 2848, 199, 349, 0, 429, 0, 0, 0, 0, 0],
    bookedPrev: [0, 900, 0, 600, 199, 0, 349, 0, 400, 0, 0, 0],
    complete: true,
  },
  "p-langford": {
    hardware: { arc: 1, remote: 2, mic: 1, keypad: 1, camera: 1, speaker: 1 },
    plan: "lifetime",
    platform: 599,
    booked: [0, 2499, 0, 398, 349, 249, 429, 599, 0, 0, 0, 0],
    bookedPrev: [1200, 0, 800, 0, 199, 0, 0, 349, 0, 0, 0, 0],
    complete: true,
  },
  "p-langford-guest": {
    hardware: { arc: 1, remote: 1, mic: 0, keypad: 0, camera: 0, speaker: 0 },
    plan: "subscription",
    platform: 232,
    booked: [0, 0, 0, 0, 2499, 199, 0, 0, 0, 0, 0, 0],
    bookedPrev: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    complete: false,
  },
  "p-palm": {
    hardware: { arc: 2, remote: 4, mic: 2, keypad: 6, camera: 4, speaker: 2 },
    plan: "legacy",
    platform: 0,
    booked: [4998, 796, 698, 1494, 1716, 1198, 0, 0, 0, 0, 0, 0],
    bookedPrev: [2499, 0, 199, 698, 0, 599, 429, 0, 0, 0, 0, 0],
    complete: true,
  },
};

function money(n, compact = false) {
  const v = Math.round(Number(n) || 0);
  if (compact && Math.abs(v) >= 1000) {
    const k = v / 1000;
    return `$${k >= 10 ? k.toFixed(0) : k.toFixed(1)}K`;
  }
  return `$${v.toLocaleString("en-US")}`;
}

function salesForProperty(p) {
  return PROPERTY_SALES[p.id] || {
    hardware: { arc: 1, remote: 0, mic: 0, keypad: 0, camera: 0, speaker: 0 },
    plan: "subscription",
    platform: 0,
    booked: Array(12).fill(0),
    bookedPrev: Array(12).fill(0),
    complete: false,
  };
}

function hardwareValue(units) {
  return HARDWARE_SKUS.reduce((n, sku) => n + (units[sku.id] || 0) * HARDWARE_PRICE[sku.id], 0);
}

function runningSum(arr) {
  let n = 0;
  return arr.map((v) => (n += v));
}

function integratorSales() {
  const props = modeProperties();
  const units = Object.fromEntries(HARDWARE_SKUS.map((s) => [s.id, 0]));
  const plans = Object.fromEntries(PLATFORM_PLANS.map((s) => [s.id, 0]));
  let hardware = 0;
  let platform = 0;
  let upcoming = 0;
  let complete = 0;
  const booked = Array(12).fill(0);
  const bookedPrev = Array(12).fill(0);
  props.forEach((p) => {
    const s = salesForProperty(p);
    HARDWARE_SKUS.forEach((sku) => { units[sku.id] += s.hardware[sku.id] || 0; });
    plans[s.plan] += 1;
    hardware += hardwareValue(s.hardware);
    platform += s.platform || 0;
    if (s.complete) complete += 1;
    else upcoming += 1;
    s.booked.forEach((v, i) => { booked[i] += v; });
    s.bookedPrev.forEach((v, i) => { bookedPrev[i] += v; });
  });
  const ytd = hardware + platform;
  const tier = [...CASHBACK_TIERS].reverse().find((t) => ytd >= t.min) || CASHBACK_TIERS[0];
  const next = CASHBACK_TIERS.find((t) => t.min > ytd);
  const subs = props.filter((p) => salesForProperty(p).plan === "subscription").length;
  const lifetime = props.filter((p) => salesForProperty(p).plan === "lifetime").length;
  const expired = props.filter((p) => salesForProperty(p).plan === "legacy").length;
  return {
    props: props.length,
    hardware,
    platform,
    ytd,
    units,
    plans,
    upcoming,
    complete,
    booked,
    bookedPrev,
    tier,
    next,
    subs,
    lifetime,
    expired,
    projected: platform + subs * 29 * 4,
  };
}

function clientPortfolio() {
  const map = new Map();
  modeProperties().forEach((p) => {
    const h = liveHealth(p);
    const c = p.client || {
      id: `c-${p.id}`,
      name: propertyName(p),
      email: "",
      phone: "",
    };
    if (!map.has(c.id)) {
      map.set(c.id, {
        id: c.id,
        name: c.name,
        email: c.email || "",
        phone: c.phone || "",
        properties: [],
        alerts: 0,
        devices: 0,
        rooms: 0,
        level: "ok",
        lastCheck: p.lastCheck || "—",
      });
    }
    const row = map.get(c.id);
    row.properties.push({
      id: p.id,
      name: h.name,
      type: h.type,
      arc: h.arc,
      rooms: h.rooms,
      devices: h.devices,
      alerts: h.alerts,
      level: h.level,
      note: p.note || "",
      lastCheck: p.lastCheck || "—",
      loc: [p.details?.city, p.details?.state].filter(Boolean).join(", "),
      address: [p.details?.street, p.details?.unit, p.details?.city, p.details?.state, p.details?.zip].filter(Boolean).join(", "),
      sales: salesForProperty(p),
      hardware: hardwareValue(salesForProperty(p).hardware),
      platform: salesForProperty(p).platform || 0,
    });
    row.alerts += h.alerts.length;
    row.devices += h.devices;
    row.rooms += h.rooms;
    if (h.level === "alert" || p.arcStatus !== "online") row.level = "alert";
    else if ((h.level === "warn" || p.note) && row.level !== "alert") row.level = "warn";
  });
  return [...map.values()];
}

function filteredClientRows() {
  const q = (state.clientQuery || "").toLowerCase();
  const filter = state.clientFilter || "all";
  return clientPortfolio().filter((c) => {
    const blob = [c.name, c.email, c.phone, ...c.properties.map((p) => `${p.name} ${p.note} ${p.loc} ${p.address}`)].join(" ").toLowerCase();
    if (q && !blob.includes(q)) return false;
    if (filter === "alert" && c.level === "ok") return false;
    return true;
  });
}

function selectedPropertySet() {
  return new Set((state.selectedProperties || []).map(String));
}

function visiblePropertyIds(rows) {
  return rows.flatMap((c) => c.properties.map((p) => String(p.id)));
}

function syncSelectAllClients() {
  const all = document.querySelector("[data-action=toggle-select-all-clients]");
  if (!all) return;
  const visible = visiblePropertyIds(filteredClientRows());
  const picked = selectedPropertySet();
  const n = visible.filter((id) => picked.has(id)).length;
  all.checked = visible.length > 0 && n === visible.length;
  all.indeterminate = n > 0 && n < visible.length;
}

function deleteSelectedProperties(ids) {
  const set = new Set((ids || state.selectedProperties || []).map(String));
  if (!set.size) return;
  const properties = liveProperties().filter((p) => !set.has(String(p.id)));
  const previewGone = set.has(String(state.previewProperty));
  setState({
    properties,
    selectedProperties: [],
    previewProperty: previewGone ? null : state.previewProperty,
    modal: null,
    confirm: null,
  });
  persistSession();
  flashToast("Removed", `${set.size} propert${set.size === 1 ? "y" : "ies"} dropped from this book.`);
}

function clientIsOpen(id) {
  if (state.clientsOpen == null) return true;
  return !!(state.clientsOpen || {})[id];
}

function arcBadge(status) {
  const key = status === "online" ? "active" : status === "connecting" || status === "searching" ? "pending" : "inactive";
  const label = key === "active" ? "Active" : key === "pending" ? "Pending" : "Inactive";
  return `<span class="arc-badge arc-badge--${key}">${label}</span>`;
}

function salesChartSvg(cur, prev) {
  const w = 720;
  const h = 168;
  const px = 36;
  const py = 16;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const max = Math.max(1, ...cur, ...prev);
  const innerW = w - px * 2;
  const innerH = h - py * 2 - 18;
  const pt = (arr, i) => {
    const x = px + (i / 11) * innerW;
    const y = py + innerH - (arr[i] / max) * innerH;
    return [x, y];
  };
  const line = (arr) => arr.map((_, i) => `${i ? "L" : "M"}${pt(arr, i)[0].toFixed(1)},${pt(arr, i)[1].toFixed(1)}`).join(" ");
  const area = (arr) => {
    const d = line(arr);
    const last = pt(arr, arr.length - 1);
    const first = pt(arr, 0);
    return `${d} L${last[0].toFixed(1)},${(py + innerH).toFixed(1)} L${first[0].toFixed(1)},${(py + innerH).toFixed(1)} Z`;
  };
  const ticks = [0, 0.5, 1].map((t) => {
    const y = py + innerH - t * innerH;
    const label = money(max * t, true);
    return `<line x1="${px}" y1="${y}" x2="${w - px}" y2="${y}" stroke="rgba(255,255,255,0.08)" /><text x="8" y="${y + 4}" fill="#707070" font-size="10">${label}</text>`;
  }).join("");
  const labels = months.map((m, i) => {
    const x = px + (i / 11) * innerW;
    return `<text x="${x}" y="${h - 2}" text-anchor="middle" fill="#707070" font-size="10">${m}</text>`;
  }).join("");
  return `
    <svg class="sales-svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="Total Arc sales year to date">
      ${ticks}
      <path d="${area(prev)}" fill="rgba(255,255,255,0.08)" />
      <path d="${line(prev)}" fill="none" stroke="#707070" stroke-width="1.5" />
      <path d="${area(cur)}" fill="rgba(77,166,255,0.22)" />
      <path d="${line(cur)}" fill="none" stroke="#4da6ff" stroke-width="2.2" />
      ${labels}
    </svg>`;
}

function donutSvg(value, total, emptyLabel) {
  const r = 38;
  const c = 2 * Math.PI * r;
  const pct = total ? Math.max(0, Math.min(1, value / total)) : 0;
  const label = total ? `${money(value, true)}` : emptyLabel || "$0";
  const sub = total ? `${Math.round(pct * 100)}%` : "No sales";
  return `
    <svg class="sales-donut" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="${r}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="12" />
      <circle cx="60" cy="60" r="${r}" fill="none" stroke="${pct ? "#4da6ff" : "transparent"}" stroke-width="12" stroke-linecap="round" stroke-dasharray="${(pct * c).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 60 60)" />
      <text x="60" y="56" text-anchor="middle" fill="#fff" font-size="14" font-weight="700">${label}</text>
      <text x="60" y="74" text-anchor="middle" fill="#b4b4b4" font-size="10">${sub}</text>
    </svg>`;
}

function salesDash() {
  const s = integratorSales();
  const cumulative = state.salesChart !== "segmented";
  const cur = cumulative ? runningSum(s.booked) : s.booked;
  const prev = cumulative ? runningSum(s.bookedPrev) : s.bookedPrev;
  const sku = state.salesSku || "arc";
  const plan = state.salesPlan || "subscription";
  const skuVal = (s.units[sku] || 0) * HARDWARE_PRICE[sku];
  const planRevenue = modeProperties()
    .filter((p) => salesForProperty(p).plan === plan)
    .reduce((n, p) => n + (salesForProperty(p).platform || 0), 0);
  const nextLabel = s.next ? `${money(s.next.min)} for Tier ${s.next.n}` : "Top tier";
  const progress = s.next ? Math.min(1, s.ytd / s.next.min) : 1;
  return `
    <div class="sales-dash">
      <article class="sales-card">
        <header>
          <h3>Revenue</h3>
          <button type="button" class="sales-card__link" data-go="clients">Manage properties</button>
        </header>
        <strong>${money(s.ytd)}</strong>
        <p>Projected and booked Jemm Arc from properties you manage.</p>
        <ul>
          <li>${money(s.projected)} projected from software plans</li>
          <li>${s.subs} ${s.subs === 1 ? "property" : "properties"} on monthly/yearly plans</li>
          <li>${s.lifetime} with lifetime access</li>
          <li>${s.expired} on legacy / expired plans</li>
        </ul>
      </article>
      <article class="sales-card">
        <header>
          <h3>Quarterly bonus · Q3 2026</h3>
          <span class="sales-card__tag">${s.tier.pct.toFixed(1)}% cashback</span>
        </header>
        <div class="sales-card__row">
          <span>Tier ${s.tier.n}</span>
          <span class="arc-badge ${s.ytd >= 5000 ? "arc-badge--active" : "arc-badge--pending"}">${s.ytd >= 5000 ? "On track" : "Fresh start"}</span>
        </div>
        <div class="sales-meter" role="img" aria-label="${money(s.ytd)} year to date">
          <i style="width:${(progress * 100).toFixed(1)}%"></i>
        </div>
        <p>${money(s.ytd)} sales (YTD) · next ${esc(nextLabel)}</p>
        <div class="sales-tiers">
          ${CASHBACK_TIERS.map((t) => `
            <span class="${s.ytd >= t.min ? "is-on" : ""}">Tier ${t.n}<em>${t.pct.toFixed(1)}%</em></span>
          `).join("")}
        </div>
      </article>
      <article class="sales-card">
        <header>
          <h3>Project registrations</h3>
          <button type="button" class="sales-card__link" data-go="clients">View properties</button>
        </header>
        <strong>${money(s.hardware)}</strong>
        <p>Estimated Arc hardware in this mode.</p>
        <ul>
          <li>${s.upcoming} upcoming project${s.upcoming === 1 ? "" : "s"}</li>
          <li>${s.complete} project${s.complete === 1 ? "" : "s"} completed</li>
        </ul>
      </article>
      <article class="sales-card sales-card--wide">
        <header>
          <h3>Total sales (YTD)</h3>
          <div class="seg seg--sm">
            <button type="button" class="${!cumulative ? "is-on" : ""}" data-action="sales-chart" data-value="segmented">Segmented</button>
            <button type="button" class="${cumulative ? "is-on" : ""}" data-action="sales-chart" data-value="cumulative">Cumulative</button>
          </div>
        </header>
        ${salesChartSvg(cur, prev)}
        <div class="sales-legend">
          <span><i class="is-prev"></i> 2025</span>
          <span><i class="is-now"></i> 2026</span>
        </div>
      </article>
      <article class="sales-card sales-card--split">
        <header>
          <h3>Hardware sales (YTD)</h3>
        </header>
        <div class="sales-split">
          ${donutSvg(skuVal, s.hardware)}
          <div class="sales-pills">
            ${HARDWARE_SKUS.map((item) => `
              <button type="button" class="${sku === item.id ? "is-on" : ""}" data-action="sales-sku" data-value="${item.id}">${item.label}</button>
            `).join("")}
          </div>
        </div>
      </article>
      <article class="sales-card sales-card--split">
        <header>
          <h3>Platform access (YTD)</h3>
        </header>
        <div class="sales-split">
          ${donutSvg(planRevenue, s.platform, "$0")}
          <div class="sales-pills">
            ${PLATFORM_PLANS.map((item) => `
              <button type="button" class="${plan === item.id ? "is-on" : ""}" data-action="sales-plan" data-value="${item.id}">${item.label}</button>
            `).join("")}
          </div>
        </div>
      </article>
    </div>`;
}

function clientsKpis(rows) {
  const props = rows.flatMap((c) => c.properties);
  const alerts = props.reduce((n, p) => n + p.alerts.length, 0);
  const attention = rows.filter((c) => c.level !== "ok").length;
  const online = props.filter((p) => p.arc === "online").length;
  const pending = props.filter((p) => p.arc !== "online").length;
  return `
    <div class="stat-grid clients-kpis">
      <article class="stat">
        <h3>Total clients</h3>
        <strong>${rows.length}</strong>
        <p>${rows.length ? "Accounts you manage" : "No clients in this mode"}</p>
      </article>
      <article class="stat">
        <h3>Properties</h3>
        <strong>${props.length}</strong>
        <p>${online} Jemm Arc active${pending ? ` · ${pending} pending` : ""}</p>
      </article>
      <article class="stat ${attention ? "is-alert" : ""}">
        <h3>Needs attention</h3>
        <strong>${attention}</strong>
        <p>${alerts ? `${alerts} device${alerts === 1 ? "" : "s"} malfunctioning` : "All properties look quiet"}</p>
      </article>
      <article class="stat ${alerts ? "is-live" : ""}">
        <h3>Jemm Arc alerts</h3>
        <strong>${alerts}</strong>
        <p>${alerts ? `${alerts} Arc device alert${alerts === 1 ? "" : "s"} in ${props.filter((p) => p.alerts.length).length} ${props.filter((p) => p.alerts.length).length === 1 ? "property" : "properties"}` : "No Arc device alerts"}</p>
      </article>
    </div>`;
}

function clientsToolbar(rows) {
  const n = (state.selectedProperties || []).length;
  const filter = state.clientFilter || "all";
  return `
    <div class="rooms-toolbar clients-toolbar">
      <div class="rooms-toolbar__left">
        <label class="rooms-search">
          <input placeholder="Search by keyword" value="${esc(state.clientQuery)}" data-bind="clientQuery" />
          <img src="assets/icon-search.svg" alt="" />
        </label>
        <button type="button" class="rooms-filter ${filter === "alert" ? "is-on" : ""}" data-action="client-filter" data-value="${filter === "alert" ? "all" : "alert"}" aria-label="Filter needs attention">
          <img src="assets/icon-filter.svg" alt="" />
        </button>
      </div>
      <div class="rooms-toolbar__btns">
        ${n ? `
          <button type="button" class="btn btn--ghost" data-action="bulk-ping">Ping Arc</button>
          <button type="button" class="btn btn--ghost" data-action="bulk-delete-properties">Delete</button>
        ` : ""}
        <div class="rooms-more-wrap" data-keep-menu>
          <button type="button" class="rooms-more" data-action="toggle-clients-menu" aria-haspopup="menu" aria-expanded="${state.clientsMenu ? "true" : "false"}" aria-label="More options">
            <span class="rooms-more__dots" aria-hidden="true"><i></i><i></i><i></i></span>
          </button>
          ${state.clientsMenu ? `
            <div class="rooms-menu" role="menu">
              <button type="button" role="menuitem" data-action="client-filter" data-value="${filter === "alert" ? "all" : "alert"}">${filter === "alert" ? "Show all clients" : "Needs attention only"}</button>
              <button type="button" role="menuitem" data-action="clients-view" data-value="${state.clientsView === "grid" ? "table" : "grid"}">${state.clientsView === "grid" ? "View as table" : "View as cards"}</button>
            </div>` : ""}
        </div>
        <button type="button" class="btn btn--next" data-action="new-property">+ Add property</button>
      </div>
    </div>`;
}

function clients() {
  const view = state.clientsView === "grid" ? "grid" : "table";
  const rows = filteredClientRows();
  const all = clientPortfolio();
  return layout(`
    <div class="app-page app-page--flush clients-page">
      <div class="clients-head">
        <div>
          <h1>Clients</h1>
          <p>Accounts and properties you manage, with Jemm Arc status at a glance.</p>
        </div>
      </div>
      ${clientsKpis(all)}
      ${clientsToolbar(rows)}
      ${rows.length === 0 ? `<p class="muted-note">No clients match that filter.</p>` : view === "grid" ? clientsGrid(rows) : clientsTable(rows)}
    </div>
  `, { landing: true });
}

function statusDot(level) {
  const label = level === "alert" ? "Alert" : level === "warn" ? "Watch" : "Healthy";
  return `<span class="status-dot status-dot--${level}" title="${label}"><i></i>${label}</span>`;
}

function clientContactCell(c) {
  return `
    <span class="data-contact">${c.email ? `<a href="mailto:${esc(c.email)}">${esc(c.email)}</a>` : "—"}</span>
    <span class="data-contact is-quiet">${esc(c.phone || "—")}</span>`;
}

function propertyLineCells(p) {
  return `
    <td>
      <strong>${esc(p.name)}</strong>
      <span class="is-quiet">${esc(p.type)}${p.loc ? ` · ${esc(p.loc)}` : ""}</span>
    </td>
    <td>${esc(p.arc)}</td>
    <td>${p.rooms} rm · ${p.devices} dv</td>
    <td>${p.alerts.length ? `<b class="data-alert">${p.alerts.length}</b>` : "0"}</td>
    <td>${esc(p.lastCheck)}</td>
    <td class="data-callout">${esc(p.note || (p.alerts[0] ? `${p.alerts[0].name} offline` : "—"))}</td>
    <td class="data-actions">
      <button type="button" data-action="open-property" data-id="${esc(p.id)}">Open</button>
      <button type="button" data-action="ping-property" data-id="${esc(p.id)}">Ping</button>
    </td>`;
}

function clientsTable(rows) {
  const picked = selectedPropertySet();
  const visible = visiblePropertyIds(rows);
  const selectedCount = visible.filter((id) => picked.has(id)).length;
  const allOn = visible.length > 0 && selectedCount === visible.length;
  const total = rows.reduce((n, c) => n + c.properties.length, 0);
  return `
    <div class="data-wrap clients-table-wrap">
      <table class="data-table clients-table">
        <thead>
          <tr>
            <th class="data-table__check">
              <input class="check" type="checkbox" data-action="toggle-select-all-clients" aria-label="Select all properties" ${allOn ? "checked" : ""} />
            </th>
            <th>Client</th>
            <th>Property / address</th>
            <th>Status</th>
            <th>Devices</th>
            <th>Jemm Arc</th>
            <th>Last updated</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${rows.flatMap((c) => {
            const ids = c.properties.map((p) => String(p.id));
            const checked = ids.length > 0 && ids.every((id) => picked.has(id));
            const open = clientIsOpen(c.id);
            const parent = `
            <tr class="data-table__row data-table__client is-${c.level} ${checked ? "is-checked" : ""}" data-action="toggle-client-open" data-id="${esc(c.id)}">
              <td class="data-table__check">
                <input class="check" type="checkbox" data-action="toggle-client-check" data-id="${esc(c.id)}" ${checked ? "checked" : ""} aria-label="Select ${esc(c.name)}" />
              </td>
              <td>
                <button type="button" class="clients-expand ${open ? "is-open" : ""}" data-action="toggle-client-open" data-id="${esc(c.id)}" aria-expanded="${open ? "true" : "false"}">
                  <span class="clients-expand__chev" aria-hidden="true"></span>
                  <strong>${esc(c.name)}</strong>
                  <span class="is-quiet">${c.properties.length} propert${c.properties.length === 1 ? "y" : "ies"}</span>
                </button>
              </td>
              <td class="is-quiet">${esc(c.email || "—")}</td>
              <td>${statusDot(c.level)}</td>
              <td>${c.devices}</td>
              <td></td>
              <td class="is-quiet">${esc(c.lastCheck)}</td>
              <td></td>
            </tr>`;
            if (!open) return [parent];
            return [parent, ...c.properties.map((p) => {
              const on = picked.has(String(p.id));
              return `
            <tr class="data-table__row data-table__nest is-${p.level} ${on ? "is-checked" : ""}" data-action="open-property" data-id="${esc(p.id)}">
              <td class="data-table__check">
                <input class="check" type="checkbox" data-action="toggle-property-check" data-id="${esc(p.id)}" ${on ? "checked" : ""} aria-label="Select ${esc(p.name)}" />
              </td>
              <td class="data-nest-mark" aria-hidden="true"></td>
              <td>
                <strong>${esc(p.name)}</strong>
                <span class="is-quiet">${esc(p.address || p.loc || p.type)}</span>
              </td>
              <td>${statusDot(p.level)}</td>
              <td>${p.devices}${p.alerts.length ? ` · <b class="data-alert">${p.alerts.length}</b>` : ""}</td>
              <td>${arcBadge(p.arc)}</td>
              <td>${esc(p.lastCheck)}</td>
              <td class="data-actions">
                <button type="button" data-action="open-property" data-id="${esc(p.id)}" aria-label="Edit ${esc(p.name)}">
                  <img src="assets/icon-pencil.svg" alt="" />
                </button>
                <button type="button" data-action="delete-property" data-id="${esc(p.id)}" aria-label="Delete ${esc(p.name)}">Delete</button>
              </td>
            </tr>`;
            })];
          }).join("")}
        </tbody>
      </table>
    </div>
    <div class="clients-foot">
      <span>Showing ${total} of ${total} registered propert${total === 1 ? "y" : "ies"}${selectedCount ? ` · ${selectedCount} selected` : ""}</span>
    </div>`;
}

function clientsGrid(rows) {
  return `
    <div class="client-grid">
      ${rows.map((c) => {
        const lead = c.properties[0];
        const callout = c.properties.map((p) => p.note).find(Boolean) || (c.alerts ? `${c.alerts} device${c.alerts === 1 ? "" : "s"} offline` : "");
        return `
          <article class="client-card is-${c.level}">
            <header>
              ${statusDot(c.level)}
              <h2>${esc(c.name)}</h2>
            </header>
            <p class="client-card__contact">
              ${c.email ? `<a href="mailto:${esc(c.email)}">${esc(c.email)}</a>` : ""}
              ${c.phone ? `<span>${esc(c.phone)}</span>` : ""}
            </p>
            ${callout ? `<p class="client-card__callout">${esc(callout)}</p>` : ""}
            <ul>
              ${c.properties.map((p) => `
                <li>
                  <button type="button" data-action="open-property" data-id="${esc(p.id)}">
                    <strong>${esc(p.name)}</strong>
                    <em>Arc ${esc(p.arc)} · ${p.rooms} rooms · ${p.devices} devices${p.alerts.length ? ` · ${p.alerts.length} alert` : ""}</em>
                  </button>
                </li>`).join("")}
            </ul>
            <footer>
              <span>${esc(lead?.lastCheck || "—")}</span>
              <button type="button" data-action="ping-property" data-id="${esc(lead.id)}">Ping Arc</button>
            </footer>
          </article>`;
      }).join("")}
    </div>`;
}

function hubRooms() {
  const rows = modeProperties().flatMap((p) => {
    const name = propertyName(p);
    return (p.floors || []).flatMap((f) => (f.rooms || []).map((r) => ({
      id: p.id,
      property: name,
      floor: f.name,
      room: typeof r === "string" ? r : r.name,
    })));
  });
  return layout(`
    <div class="app-page">
      <h1>Rooms</h1>
      <p>Every room mapped across your live properties.</p>
      <div class="app-list">
        ${rows.length ? rows.map((r) => `
          <button type="button" class="app-row" data-action="open-property" data-id="${esc(r.id)}">
            <span><strong>${esc(r.room)}</strong><em>${esc(r.property)} · ${esc(r.floor)}</em></span>
            <span class="app-row__meta">Open</span>
          </button>`).join("") : `<p>No rooms mapped yet.</p>`}
      </div>
    </div>
  `, { landing: true });
}

function insights() {
  const all = modeProperties();
  const alerts = liveAlerts();
  const devices = all.reduce((n, p) => n + (p.devices || []).length, 0);
  const rooms = all.reduce((n, p) => n + (p.floors || []).reduce((a, f) => a + (f.rooms?.length || 0), 0), 0);
  const online = all.filter((p) => p.arcStatus === "online").length;
  return layout(`
    <div class="app-page app-page--flush clients-page">
      <div class="clients-head">
        <div>
          <h1>Insights</h1>
          <p>Arc sales, cashback, and a live snapshot of the fleet.</p>
        </div>
      </div>
      ${salesDash()}
      <div class="stat-grid clients-kpis">
        <article class="stat"><h3>Properties</h3><strong>${all.length}</strong><p>${online} Arc online</p></article>
        <article class="stat"><h3>Rooms</h3><strong>${rooms}</strong><p>Mapped layouts</p></article>
        <article class="stat"><h3>Devices</h3><strong>${devices}</strong><p>Across the portfolio</p></article>
        <article class="stat ${alerts.length ? "is-alert" : ""}"><h3>Alerts</h3><strong>${alerts.length}</strong><p>${alerts.length ? "Need a look" : "All clear"}</p></article>
      </div>
      <div class="app-list">
        ${alerts.length ? alerts.map((a) => `
          <button type="button" class="app-row" data-action="open-property" data-id="${esc(a.id)}">
            <span><strong>${esc(a.name)}</strong><em>${esc(a.body)}</em></span>
          </button>`).join("") : `<p class="muted-note">No incidents in the last live check.</p>`}
      </div>
    </div>
  `, { landing: true });
}

const screens = { landing, signin, welcome, account, property, arc, rooms, devices, done, dashboard, profile, settings, clients, "hub-rooms": hubRooms, insights };

let liveTimer = null;
let liveBeat = 0;

function stopLiveFeed() {
  if (liveTimer) {
    clearInterval(liveTimer);
    liveTimer = null;
  }
}

function tickLiveFeed() {
  const clock = document.querySelector("[data-live-clock]");
  if (clock) {
    clock.textContent = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit", second: "2-digit" });
  }
  const items = [...document.querySelectorAll("[data-live-item]")];
  if (!items.length) return;
  liveBeat += 1;
  items.forEach((el, i) => {
    el.classList.toggle("is-hot", (liveBeat + i) % items.length === 0);
    const line = el.querySelector("[data-live-line]");
    const id = el.dataset.id;
    const p = liveProperties().find((x) => String(x.id) === String(id));
    if (line && p) line.textContent = liveMoments(p, liveBeat + i);
  });
}

function startLiveFeed() {
  stopLiveFeed();
  tickLiveFeed();
  liveTimer = setInterval(tickLiveFeed, 3200);
}

function playArcGem() {
  const v = document.getElementById("jemm-arc-gem");
  if (!v) return;
  v.muted = true;
  v.loop = true;
  v.play().catch(() => {});
}

function playJemmHome() {
  const v = document.getElementById("jemm-home-video");
  if (!v) return;
  v.muted = false;
  v.play().then(() => {}).catch(() => {
    v.muted = true;
    v.play().catch(() => {});
  });
}

function render() {
  const changed = lastScreen !== state.screen;
  const stageEl = document.querySelector(".stage");
  const sheetEl = document.querySelector(".sheet--device .sheet__body");
  const roomsEl = document.querySelector(".wizard__body--rooms");
  const keepScroll = !changed && stageEl ? stageEl.scrollTop : 0;
  const keepSheet = !changed && lastSheetId === state.selectedDevice && sheetEl ? sheetEl.scrollTop : 0;
  const keepRooms = !changed && roomsEl ? roomsEl.scrollTop : 0;
  lastScreen = state.screen;
  document.getElementById("app").innerHTML = (screens[state.screen] || landing)();
  const inner = document.querySelector(".stage-inner");
  if (inner && changed) inner.classList.add("is-enter");
  const stage = document.querySelector(".stage");
  if (stage && !changed) stage.scrollTop = keepScroll;
  const sheetBody = document.querySelector(".sheet--device .sheet__body");
  if (sheetBody) sheetBody.scrollTop = keepSheet;
  const deviceSheetEl = document.querySelector(".sheet--device");
  if (deviceSheetEl) {
    if (!lastSheetId) deviceSheetEl.classList.add("is-enter");
    lastSheetId = state.selectedDevice;
  } else {
    lastSheetId = null;
  }
  if (state.screen === "welcome") playWelcome();
  playHeroJemm();
  if (state.screen === "arc") playArcGem();
  if (state.screen === "dashboard") {
    startLiveFeed();
  } else {
    stopLiveFeed();
  }
  if (state.jemmVideo) playJemmHome();
  syncVoiceEngine();
  bindNavScroll();
  bindSheetHeroScale();
  bindRoomsPin();
  const roomsBody = document.querySelector(".wizard__body--rooms");
  if (roomsBody && !changed && keepRooms) {
    roomsBody.scrollTop = keepRooms;
    if (typeof roomsBody.onscroll === "function") roomsBody.onscroll();
  }
  bindHouse3d();
  bindPlan3d();
  bindPlanDrop();
  bindDeviceDrag();
  syncSelectAll();
  syncSelectAllClients();
  positionCoach();
  playJemmType();
}

function bindNavScroll() {
  const shell = document.querySelector(".shell");
  const stage = document.querySelector(".stage");
  if (!shell || !stage) return;
  const update = () => {
    shell.classList.toggle("is-scrolled", stage.scrollTop > 8);
  };
  stage.onscroll = update;
  update();
}

function bindRoomsPin() {
  const scroller = document.querySelector(".wizard__body--rooms");
  const pin = scroller?.querySelector(".rooms-pin");
  if (!scroller || !pin) return;
  const hero = scroller.querySelector(".prop-hero");
  const scenes = scroller.querySelector(".rooms-scenes");
  const update = () => {
    const above = (hero?.offsetHeight || 0) + (scenes?.offsetHeight || 0);
    const hidden = Math.min(Math.max(0, scroller.scrollTop), above);
    const minPin = window.matchMedia("(max-width: 1024px)").matches ? 640 : 160;
    const pinH = Math.max(minPin, Math.round(scroller.clientHeight - above + hidden));
    const spacerH = Math.max(0, Math.round(above - hidden));
    scroller.style.setProperty("--rooms-pin-h", `${pinH}px`);
    scroller.style.setProperty("--rooms-pin-spacer", `${spacerH}px`);
    pin.classList.add("is-bound");
    pin.classList.toggle("is-stuck", above > 0 && hidden >= above - 1);
  };
  scroller.onscroll = update;
  scroller.addEventListener("scroll", update, { passive: true });
  if (typeof ResizeObserver !== "undefined") {
    const ro = new ResizeObserver(update);
    ro.observe(scroller);
    if (hero) ro.observe(hero);
    if (scenes) ro.observe(scenes);
  }
  update();
}

function bindSheetHeroScale() {
  const sheet = document.querySelector(".sheet--device");
  const body = sheet?.querySelector("[data-sheet-scroll]") || sheet?.querySelector(".sheet__body");
  if (!sheet || !body) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let ticking = false;
  const update = () => {
    ticking = false;
    if (reduce) {
      sheet.style.setProperty("--sheet-hero", "0");
      sheet.classList.remove("is-scrolled");
      return;
    }
    const t = Math.max(0, Math.min(1, body.scrollTop / 132));
    sheet.style.setProperty("--sheet-hero", t.toFixed(4));
    sheet.classList.toggle("is-scrolled", t > 0.08);
  };
  body.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });
  update();
}

function logout() {
  stopJemmListen();
  localStorage.removeItem(SESSION_KEY);
  const theme = state.theme;
  state = blankState();
  state.theme = theme;
  applyTheme(theme);
  render();
}

function playHeroJemm() {
  const v = document.getElementById("jemm-hero-video");
  if (!v) return;
  v.muted = true;
  v.loop = true;
  v.play().catch(() => {});
}

function playWelcome() {
  const v = document.getElementById("hi-jemm");
  if (!v) return;
  v.addEventListener("ended", () => {
    if (state.screen === "welcome") go("account");
  }, { once: true });
  const unmute = () => {
    v.muted = false;
  };
  v.muted = false;
  v.play().then(unmute).catch(() => {
    v.muted = true;
    v.play().then(() => {}).catch(() => {});
  });
}

function endDeviceDrag(e) {
  if (!deviceDrag.armed) return;
  const over = document.elementFromPoint(e.clientX, e.clientY)?.closest("[data-drop-room]");
  const id = deviceDrag.id;
  const moved = deviceDrag.moved;
  const src = deviceDrag.src;
  hideDeviceDragGhost();
  document.querySelectorAll(".is-dragging, [data-drop-room].is-drop").forEach((n) => {
    n.classList.remove("is-dragging", "is-drop");
  });
  if (src && deviceDrag.pointerId != null) {
    try { src.releasePointerCapture(deviceDrag.pointerId); } catch {}
  }
  deviceDrag.armed = false;
  deviceDrag.id = null;
  deviceDrag.src = null;
  deviceDrag.pointerId = null;
  if (moved && over) {
    deviceDrag.swallowClick = true;
    assignDeviceRoom(id, over.dataset.dropRoom);
  }
  later(() => { deviceDrag.swallowClick = false; }, 80);
}

document.addEventListener("pointerdown", (e) => {
  const src = e.target.closest("[data-drag-device]");
  if (!src || e.button !== 0) return;
  if (e.target.closest("input, textarea, select, .room-row__x, .room-row__more, .room-more, .coach")) return;
  deviceDrag.id = src.dataset.dragDevice;
  deviceDrag.src = src;
  deviceDrag.armed = true;
  deviceDrag.moved = false;
  deviceDrag.startX = e.clientX;
  deviceDrag.startY = e.clientY;
  deviceDrag.pointerId = e.pointerId;
});
document.addEventListener("pointermove", (e) => {
  if (!deviceDrag.armed || !deviceDrag.id) return;
  if (!deviceDrag.moved && Math.abs(e.clientX - deviceDrag.startX) + Math.abs(e.clientY - deviceDrag.startY) > 8) {
    deviceDrag.moved = true;
    deviceDrag.swallowClick = true;
    deviceDrag.src?.classList.add("is-dragging");
    try { deviceDrag.src?.setPointerCapture(e.pointerId); } catch {}
  }
  if (!deviceDrag.moved) return;
  e.preventDefault();
  document.querySelectorAll("[data-drop-room].is-drop").forEach((n) => n.classList.remove("is-drop"));
  const d = state.devices.find((x) => String(x.id) === String(deviceDrag.id));
  showDeviceDragGhost(e.clientX, e.clientY, d ? `Move ${d.name}` : "Move device");
  const over = document.elementFromPoint(e.clientX, e.clientY)?.closest("[data-drop-room]");
  if (over && over.dataset.dropRoom !== d?.room) over.classList.add("is-drop");
}, { passive: false });
document.addEventListener("pointerup", endDeviceDrag);
document.addEventListener("pointercancel", endDeviceDrag);

document.addEventListener("dblclick", (e) => {
  const title = e.target.closest("[data-action=edit-room-title]");
  const name = e.target.closest("[data-action=edit-room-name]");
  if (title) {
    const i = Number(title.dataset.index);
    if (Number.isFinite(i)) beginRoomRename(i, "title");
    return;
  }
  if (name) {
    const i = Number(name.dataset.index);
    if (Number.isFinite(i)) beginRoomRename(i, "row");
  }
});

document.addEventListener("click", (e) => {
  if (e.target.closest("a[href]")) return;
  const goEl = e.target.closest("[data-go]");
  if (goEl) {
    if (e.target.closest(".welcome__video")) return;
    e.preventDefault();
    const dest = goEl.dataset.go;
    const blocked = gateNavigation(dest);
    if (blocked) {
      if (blocked === "property-fields") {
        setState({
          formTouched: {
            ...(state.formTouched || {}),
            "property.name": true,
            "property.street": true,
            "property.city": true,
          },
        });
        return;
      }
      flashToast("Can’t continue", blocked, "error");
      return;
    }
    if (shouldConfirmLeave(dest)) {
      setState({ modal: "leave", leaveDest: dest });
      return;
    }
    if (dest === "done") finishSetup();
    else go(dest);
    return;
  }
  const keepMenu = e.target.closest("[data-keep-menu]");
  if (!keepMenu && (state.propMenu || state.notifyOpen || state.roomsMenu || state.clientsMenu || state.jemmMenu || state.roomMenu != null)) {
    const action = e.target.closest("[data-action]");
    if (!action) {
      setState({ propMenu: false, notifyOpen: false, roomsMenu: false, clientsMenu: false, jemmMenu: false, roomMenu: null });
      return;
    }
    state.propMenu = false;
    state.notifyOpen = false;
    state.jemmMenu = false;
    if (action.dataset.action !== "toggle-rooms-menu") state.roomsMenu = false;
    if (action.dataset.action !== "toggle-clients-menu") state.clientsMenu = false;
    if (action.dataset.action !== "toggle-room-menu") state.roomMenu = null;
  }
  if (state.jemmSideOpen && !e.target.closest(".jemm-side")) {
    state.jemmSideOpen = false;
    if (!e.target.closest("[data-action]") && !e.target.closest("[data-go]")) {
      render();
      return;
    }
  }
  const action = e.target.closest("[data-action]");
  if (!action) {
    if (state.editingRoom != null && !e.target.closest("[data-room]")) {
      setState({ editingRoom: null });
    }
    return;
  }
  const act = action.dataset.action;
  const keepRoomEdit = act === "edit-room-name" || act === "edit-room-title" || act === "edit-room";
  if (state.editingRoom != null && !keepRoomEdit && !e.target.closest("[data-room]")) {
    state.editingRoom = null;
  }
  if (act === "help") setState({ showHelp: true });
  if (act === "close-help") setState({ showHelp: false });
  if (act === "hide-jemm") {
    stopJemmListen();
    withJemmMove({ jemmVisible: false, jemmDock: false, voiceMode: false, voiceHeard: "", jemmReply: "", voiceError: "", jemmMenu: false, jemmSideOpen: false });
    if (state.loggedIn) persistSession();
    return;
  }
  if (act === "toggle-jemm-menu") {
    setState({ jemmMenu: !state.jemmMenu, propMenu: false, notifyOpen: false, roomsMenu: false });
    return;
  }
  if (act === "set-jemm-place") {
    const place = normalizeJemmPlace(action.dataset.value);
    resetJemmSpeech();
    withJemmMove({ jemmVisible: true, jemmPlace: place, jemmMenu: false, jemmSideOpen: false });
    if (state.loggedIn) persistSession();
    return;
  }
  if (act === "toggle-jemm") {
    if (state.jemmVisible) {
      stopJemmListen();
      withJemmMove({ jemmVisible: false, jemmDock: false, voiceMode: false, voiceHeard: "", jemmReply: "", voiceError: "", jemmMenu: false, jemmSideOpen: false });
    } else {
      resetJemmSpeech();
      withJemmMove({ jemmVisible: true, jemmPlace: normalizeJemmPlace(state.jemmPlace), jemmMenu: false });
    }
    if (state.loggedIn) persistSession();
    return;
  }
  if (act === "toggle-jemm-side") {
    setState({ jemmSideOpen: !state.jemmSideOpen, jemmMenu: false });
    return;
  }
  if (act === "swap-jemm") {
    const order = ["top", "bottom"];
    const i = order.indexOf(normalizeJemmPlace(state.jemmPlace));
    withJemmMove({ jemmPlace: order[(i + 1) % order.length], jemmVisible: true, jemmMenu: false, jemmSideOpen: false });
  }
  if (act === "toggle-voice") {
    if (state.voiceMode) {
      stopJemmListen();
      setState({ voiceMode: false, voiceHeard: "", jemmReply: "", voiceError: "" });
    } else {
      primeMic();
      setState({ voiceMode: true, voiceHeard: "", jemmReply: "", voiceError: "" });
    }
  }
  if (act === "clients-view") setState({ clientsView: action.dataset.value, clientsMenu: false });
  if (act === "client-filter") setState({ clientFilter: action.dataset.value, clientsMenu: false });
  if (act === "sales-chart") setState({ salesChart: action.dataset.value === "segmented" ? "segmented" : "cumulative" });
  if (act === "sales-sku") setState({ salesSku: action.dataset.value });
  if (act === "sales-plan") setState({ salesPlan: action.dataset.value });
  if (act === "toggle-clients-menu") {
    setState({ clientsMenu: !state.clientsMenu, roomsMenu: false, propMenu: false, notifyOpen: false });
    return;
  }
  if (act === "toggle-client-open") {
    const id = action.dataset.id;
    const open = { ...(state.clientsOpen || Object.fromEntries(clientPortfolio().map((c) => [c.id, true]))) };
    open[id] = !clientIsOpen(id);
    setState({ clientsOpen: open });
    return;
  }
  if (act === "toggle-property-check") {
    const id = String(action.dataset.id);
    const picked = selectedPropertySet();
    if (picked.has(id)) picked.delete(id);
    else picked.add(id);
    setState({ selectedProperties: [...picked] });
    return;
  }
  if (act === "toggle-client-check") {
    const client = clientPortfolio().find((c) => String(c.id) === String(action.dataset.id));
    if (!client) return;
    const ids = client.properties.map((p) => String(p.id));
    const picked = selectedPropertySet();
    const allOn = ids.every((id) => picked.has(id));
    ids.forEach((id) => (allOn ? picked.delete(id) : picked.add(id)));
    setState({ selectedProperties: [...picked] });
    return;
  }
  if (act === "toggle-select-all-clients") {
    const visible = visiblePropertyIds(filteredClientRows());
    const picked = selectedPropertySet();
    const allOn = visible.length > 0 && visible.every((id) => picked.has(id));
    setState({
      selectedProperties: allOn ? [...picked].filter((id) => !visible.includes(id)) : [...new Set([...picked, ...visible])],
    });
    return;
  }
  if (act === "bulk-ping") {
    const n = (state.selectedProperties || []).length;
    if (!n) return;
    flashToast("Remote check", `${n} Arc${n === 1 ? "" : "s"} pinged.`);
    return;
  }
  if (act === "bulk-delete-properties") {
    const ids = [...(state.selectedProperties || [])];
    if (!ids.length) return;
    askConfirm({ kind: "delete-properties", ids });
    return;
  }
  if (act === "delete-property") {
    const id = action.dataset.id;
    if (!id) return;
    askConfirm({ kind: "delete-properties", ids: [id] });
    return;
  }
  if (act === "ping-property") {
    const p = liveProperties().find((x) => String(x.id) === String(action.dataset.id));
    const name = p ? propertyName(p) : "Property";
    flashToast("Remote check", `${name} pinged. Arc heartbeat requested.`);
  }
  if (act === "show-jemm") {
    setState({ jemmVisible: true, jemmDock: false });
    if (state.loggedIn) persistSession();
  }
  if (act === "collapse-sidebar") setState({ sidebarOpen: false });
  if (act === "expand-sidebar") setState({ sidebarOpen: true });
  if (act === "set-theme") {
    persistTheme(action.dataset.value);
    setState({ theme: action.dataset.value });
  }
  if (act === "save-profile") {
    const a = state.account || {};
    if (!String(a.first || "").trim() || !String(a.last || "").trim()) {
      flashToast("Can’t save", "Add your first and last name.", "error");
      return;
    }
    if (!String(a.email || "").includes("@")) {
      flashToast("Can’t save", "Enter a valid email.", "error");
      return;
    }
    persistSession();
    flashToast("Saved", "Profile updated.");
  }
  if (act === "logout") logout();
  if (act === "open-jemm-video") setState({ jemmVideo: true, jemmDock: false });
  if (act === "close-jemm-video") setState({ jemmVideo: false });
  if (act === "toggle-prop-menu" || act === "toggle-mode-menu") setState({ propMenu: !state.propMenu, notifyOpen: false, jemmMenu: false });
  if (act === "set-mode") {
    const mode = action.dataset.value === "office" ? "office" : "residential";
    persistMode(mode);
    const viewing = state.property.type === "commercial" ? "office" : "residential";
    const patch = { portalMode: mode, propMenu: false, previewProperty: null, selectedDevice: null };
    if ((state.reviewing || isOnboarding()) && viewing !== mode && state.loggedIn && !state.addingProperty) {
      patch.reviewing = false;
      patch.screen = "dashboard";
    }
    setState(patch);
    return;
  }
  if (act === "property-view") {
    setState({ propertyView: action.dataset.value, selectedDevice: null });
    return;
  }
  if (act === "crumb-property") {
    openCrumbRooms({ selectedRooms: [] }, false);
    return;
  }
  if (act === "crumb-rooms") {
    openCrumbRooms({}, true);
    return;
  }
  if (act === "crumb-floor") {
    openCrumbRooms({
      selectedFloor: Number(action.dataset.index),
      selectedRoom: 0,
      selectedRooms: [],
    }, true);
    return;
  }
  if (act === "close-device") {
    closeDeviceSheet();
    return;
  }
  if (act === "open-scene") {
    setState({ modal: "scene", selectedScene: action.dataset.id });
    return;
  }
  if (act === "run-scene" || act === "stop-scene") {
    const scenes = propertyScenes();
    const hit = scenes.find((s) => s.id === action.dataset.id);
    if (hit) {
      scenes.forEach((s) => { s.on = act === "run-scene" && s.id === hit.id; });
      setState({ modal: null, selectedScene: null });
      flashToast(hit.name, act === "run-scene" ? `${hit.name} is running.` : `${hit.name} is off.`);
    }
    return;
  }
  if (act === "toggle-notify") setState({ notifyOpen: !state.notifyOpen, propMenu: false, jemmMenu: false });
  if (act === "dismiss-toast") setState({ toast: null, toastTitle: null, toastKind: null });
  if (act === "close-modal") {
    if (action.classList.contains("overlay") && e.target !== action) return;
    if (state.modal === "add-device" && state.scanResult) {
      closeScanResult();
      return;
    }
    const was = state.modal;
    const token = (state.scanToken || 0) + 1;
    const scan = was === "add-device" && state.deviceScan === "scanning" ? "idle" : state.deviceScan;
    setState({ modal: null, confirm: null, selectedScene: null, propertyDraft: null, uploadPct: 0, deviceScan: scan, scanToken: token, scanResult: null, scanStatus: "", addDeviceKind: null });
    if (was === "upload") flashToast("Upload cancelled", "No floorplans were added.", "error");
    else if (was === "property") flashToast("Cancelled", "Property changes were discarded.", "error");
    else if (was === "floor") flashToast("Cancelled", "No floor was added.", "error");
    return;
  }
  if (act === "finish-later") setState({ modal: "leave", leaveDest: "dashboard" });
  if (act === "save-draft") saveDraftAndLeave();
  if (act === "resume-draft") resumeDraft();
  if (act === "edit-property") {
    setState({ modal: "property", propertyDraft: { ...blankState().property, ...state.property } });
    return;
  }
  if (act === "draft-type") {
    const propertyDraft = { ...(state.propertyDraft || state.property), type: action.dataset.value };
    setState({ propertyDraft });
    return;
  }
  if (act === "save-property-meta") {
    savePropertyMeta();
    return;
  }
  if (act === "room-view") setState({ roomView: action.dataset.value });
  if (act === "layout-view") {
    const layoutView = action.dataset.value === "list" ? "list" : "3d";
    state.layoutView = layoutView;
    persistLayoutView();
    setState({ layoutView, tablePeek: false, planView: layoutView === "3d" ? "3d" : state.planView });
    return;
  }
  if (act === "room-panel") {
    setState({ roomPanel: action.dataset.value === "scenes" ? "scenes" : "devices" });
    return;
  }
  if (act === "toggle-rooms-menu") {
    setState({ roomsMenu: !state.roomsMenu, roomMenu: null, propMenu: false, notifyOpen: false });
    return;
  }
  if (act === "show-diagnostics") {
    setState({ modal: "diagnostics", roomsMenu: false });
    return;
  }
  if (act === "close-table-peek") {
    setState({ tablePeek: false });
    return;
  }
  if (act === "house3d-auto") {
    house3d.auto = !house3d.auto;
    action.textContent = house3d.auto ? "Pause" : "Spin";
    return;
  }
  if (act === "house3d-reset") {
    house3d.yaw = -26;
    house3d.pitch = 64;
    house3d.auto = false;
    applyHouse3dTransform();
    const spinBtn = document.querySelector("[data-action=house3d-auto]");
    if (spinBtn) spinBtn.textContent = "Spin";
    return;
  }
  if (act === "home-view") setState({ homeView: action.dataset.value });
  if (act === "home-filter") setState({ homeFilter: action.dataset.value });
  if (act === "dash-jump") {
    const next = { homeFilter: action.dataset.filter || state.homeFilter };
    setState(next);
    later(() => {
      document.getElementById(action.dataset.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
    return;
  }
  if (act === "preview-property" || act === "open-property") {
    const p = liveProperties().find((x) => String(x.id) === String(action.dataset.id));
    if (!loadPropertyRecord(p)) return;
    go("rooms");
    return;
  }
  if (act === "close-preview") {
    go("dashboard");
    return;
  }
  if (act === "clear-cover") {
    setPropertyCover("");
    flashToast("Photo removed", "The header now uses the default steel gradient.");
    return;
  }
  if (act === "open-device") {
    if (deviceDrag.swallowClick) {
      deviceDrag.swallowClick = false;
      return;
    }
    const id = action.dataset.id;
    const owner = liveProperties().find((p) => (p.devices || []).some((d) => String(d.id) === String(id)));
    const inThis = (state.devices || []).some((d) => String(d.id) === String(id));
    if (owner && !inThis && state.loggedIn && !state.addingProperty) {
      if (!loadPropertyRecord(owner)) return;
      go("rooms");
    }
    const found = findSheetDevice(id);
    if (String(state.selectedDevice) === String(id) && found) return;
    setState({
      selectedDevice: id,
      deviceSnapshot: found ? structuredClone(deviceView(found)) : null,
      modal: null,
      roomsMenu: false,
      sheetAccord: { test: true, hardware: true, network: true },
      jemmSideOpen: false,
    });
    return;
  }
  if (act === "close-sheet") {
    if (action.classList.contains("sheet-scrim") && e.target !== action) return;
    closeDeviceSheet();
    return;
  }
  if (act === "device-on") {
    const id = action.dataset.id || state.selectedDevice;
    const next = mutateDevice(id, { on: action.dataset.value === "true" });
    setState(next);
    return;
  }
  if (act === "device-history") {
    const d = deviceView(findSheetDevice(state.selectedDevice));
    flashToast("History", d.updated ? `Last updated ${d.updated}.` : "No recent changes recorded.");
    return;
  }
  if (act === "device-kelvin") {
    const kelvin = Number(action.dataset.value);
    setState(mutateDevice(state.selectedDevice, { kelvin }));
    return;
  }
  if (act === "device-mute") {
    const d = deviceView(findSheetDevice(state.selectedDevice));
    setState(mutateDevice(state.selectedDevice, { muted: !d.muted }));
    return;
  }
  if (act === "device-hvac") {
    const hvacMode = action.dataset.value;
    setState(mutateDevice(state.selectedDevice, { hvacMode, on: hvacMode !== "off" }));
    return;
  }
  if (act === "device-fan") {
    setState(mutateDevice(state.selectedDevice, { fan: action.dataset.value }));
    return;
  }
  if (act === "device-temp") {
    const d = deviceView(findSheetDevice(state.selectedDevice));
    const targetTemp = Math.min(80, Math.max(60, (d.targetTemp ?? 72) + Number(action.dataset.delta)));
    setState(mutateDevice(state.selectedDevice, { targetTemp, intensity: targetTemp }));
    return;
  }
  if (act === "device-shade") {
    const shadePos = Number(action.dataset.value);
    setState(mutateDevice(state.selectedDevice, { shadePos, intensity: shadePos }));
    return;
  }
  if (act === "play-chime") {
    playTestChime();
    return;
  }
  if (act === "ping-jemm" || act === "flash-load") {
    pingJemm();
    return;
  }
  if (act === "unpair-device") {
    if (!findSheetDevice(state.selectedDevice)) return;
    askConfirm({ kind: "unpair" });
    return;
  }
  if (act === "unassign-device") {
    const d = findSheetDevice(state.selectedDevice);
    if (!d?.room) return;
    setState(mutateDevice(state.selectedDevice, { room: "" }));
    flashToast("Unassigned", `${d.name} is no longer in a room.`);
    return;
  }
  if (act === "edit-device-name") {
    if (!findSheetDevice(state.selectedDevice)) return;
    setState({ modal: "device-name" });
    later(() => {
      const input = document.getElementById("device-name-edit");
      if (!input) return;
      input.focus();
      input.select();
    }, 40);
    return;
  }
  if (act === "save-device-name") {
    const name = document.getElementById("device-name-edit")?.value.trim();
    const d = findSheetDevice(state.selectedDevice);
    if (!d) {
      setState({ modal: null });
      return;
    }
    if (!name) {
      flashToast("Can’t save", "Give the device a name.", "error");
      return;
    }
    const next = mutateDevice(d.id, { name });
    const snap = state.deviceSnapshot ? { ...state.deviceSnapshot, name } : null;
    setState({ ...next, modal: null, deviceSnapshot: snap });
    if (state.loggedIn) persistSession();
    flashToast("Name updated", `${name} is saved.`);
    return;
  }
  if (act === "save-device") {
    const d = deviceView(findSheetDevice(state.selectedDevice));
    if (!d) {
      flashToast("Can’t save", "That device is no longer available.", "error");
      setState({ selectedDevice: null, deviceSnapshot: null });
      return;
    }
    const next = mutateDevice(d.id, d);
    setState({ ...next, selectedDevice: null, deviceSnapshot: null });
    if (state.loggedIn) persistSession();
    flashToast("Saved", `${d.name} was updated.`);
    return;
  }
  if (act === "toggle-pass") setState({ showPass: !state.showPass });
  if (act === "toggle-flag") setState({ [action.dataset.flag]: !state[action.dataset.flag] });
  if (act === "set-property-type" || act === "type") {
    applyPropertyType(action.dataset.value);
    return;
  }
  if (act === "coach-next") {
    coachNext();
    return;
  }
  if (act === "coach-back") {
    coachPrev();
    return;
  }
  if (act === "coach-skip") {
    setState({ coach: "done", modal: state.coach === "sync" ? null : state.modal });
    return;
  }
  if (act === "accept-suggest") {
    acceptSuggestion(action.dataset.name);
    return;
  }
  if (act === "open-add-device") {
    const patch = { modal: "add-device", scanResult: null, addDeviceKind: action.dataset.kind || null };
    if (state.coach === "add-device") patch.coach = "sync";
    setState(patch);
    return;
  }
  if (act === "toggle-device-group") {
    const label = action.dataset.group;
    if (!label) return;
    const current = { ...(state.deviceAccord || {}) };
    current[label] = !deviceGroupOpen(label);
    setState({ deviceAccord: current });
    return;
  }
  if (act === "sync-devices") {
    if (action.dataset.id) {
      const p = liveProperties().find((x) => String(x.id) === String(action.dataset.id));
      if (p) loadPropertyRecord(p);
    }
    beginDeviceScan();
    return;
  }
  if (act === "start-arc-scan") {
    beginDeviceScan();
    return;
  }
  if (act === "finish-scan") {
    closeScanResult();
    return;
  }
  if (act === "save-manual-device") {
    const name = document.getElementById("new-device-name")?.value.trim();
    const kind = document.getElementById("new-device-kind")?.value || "light";
    const room = document.getElementById("new-device-room")?.value || existingRoomNames()[0] || "New room";
    if (!name) {
      flashToast("Can’t add", "Give the device a name.", "error");
      return;
    }
    const device = deviceView({
      id: "d-" + Date.now(),
      netId: "manual-" + Date.now(),
      manual: true,
      name,
      kind,
      icon: iconForKind(kind),
      room,
      on: true,
      intensity: kind === "climate" ? 72 : 70,
      diagnostic: "Healthy",
      firmware: "1.0.0",
      size: "—",
      weight: "—",
    });
    const patch = {
      devices: [...state.devices, device],
      modal: null,
      deviceScan: "found",
    };
    if (state.coach === "add-device" || state.coach === "sync") {
      patch.coach = nextCoachAfter("sync", patch.devices);
      patch.layoutView = "3d";
      patch.roomPanel = "devices";
    }
    setState(patch);
    persistLayout();
    flashToast("Device added", `${name} is in ${room}.`);
    return;
  }
  if (act === "skip-arc" && state.arcStatus !== "online") setState({ arcStatus: "online" });
  if (act === "browse") {
    const input = document.getElementById("file-input");
    if (input) input.click();
    else startUpload();
    return;
  }
  if (act === "confirm-upload") confirmUpload();
  if (act === "add-floor") setState({ modal: "floor" });
  if (act === "add-floor-quick") addFloor("");
  if (act === "add-room") addRoom();
  if (act === "save-floor") {
    const input = document.getElementById("floor-name");
    addFloor(input ? input.value : "");
  }
  if (act === "select-floor") {
    const i = Number(action.dataset.index);
    setState({ selectedFloor: i, selectedRoom: 0, selectedRooms: [], selectedDevice: null, editingRoom: null });
    return;
  }
  if (act === "plan-view") {
    const next = action.dataset.value === "3d" ? "3d" : "2d";
    setState({ planView: next });
    return;
  }
  if (act === "select-room") {
    if (deviceDrag.swallowClick) {
      deviceDrag.swallowClick = false;
      return;
    }
    const i = Number(action.dataset.index);
    if (i === state.selectedRoom && !e.target.closest("[data-room]") && state.editingRoom == null) return;
    const input = e.target.closest("[data-room]");
    const caret = input && typeof input.selectionStart === "number" ? input.selectionStart : null;
    setState({ selectedRoom: i, roomMenu: null, editingRoom: isEditingRoom(i) ? i : null, tablePeek: state.layoutView === "table" ? true : state.tablePeek });
    if (input) {
      requestAnimationFrame(() => {
        const el = document.querySelector(`.room-row [data-room="${i}"]`) || document.querySelector(`[data-room="${i}"]`);
        if (!el) return;
        el.focus();
        if (caret != null) el.setSelectionRange(caret, caret);
      });
    }
    return;
  }
  if (act === "edit-room-name") {
    const i = Number(action.dataset.index);
    if (!Number.isFinite(i)) return;
    queueRoomSelect(i);
    return;
  }
  if (act === "edit-room-title") {
    return;
  }
  if (act === "toggle-room-menu") {
    const i = Number(action.dataset.index);
    if (!Number.isFinite(i)) return;
    setState({ roomMenu: state.roomMenu === i ? null : i, roomsMenu: false, propMenu: false, notifyOpen: false });
    return;
  }
  if (act === "edit-room") {
    const i = Number(action.dataset.index);
    if (!Number.isFinite(i)) return;
    beginRoomRename(i, "row");
    return;
  }
  if (act === "move-room") {
    const i = Number(action.dataset.index);
    if (!Number.isFinite(i)) return;
    if (state.floors.length < 2) {
      flashToast("Add a floor", "Create another floor before moving rooms.", "error");
      setState({ roomMenu: null });
      return;
    }
    setState({ selectedRoom: i, selectedRooms: [i], roomMenu: null, modal: "move-rooms" });
    return;
  }
  if (act === "delete-room") {
    const index = Number(action.dataset.index);
    if (!Number.isFinite(index)) return;
    setState({ roomMenu: null, modal: "confirm", confirm: { kind: "delete-room", index } });
    return;
  }
  if (act === "toggle-room-check") {
    const i = Number(action.dataset.index);
    const picked = selectedRoomSet();
    if (picked.has(i)) picked.delete(i);
    else picked.add(i);
    setState({ selectedRooms: [...picked], selectedRoom: i });
    return;
  }
  if (act === "toggle-select-all") {
    const floor = state.floors[state.selectedFloor];
    const visible = visibleRoomIndexes(floor);
    const picked = selectedRoomSet();
    const allOn = visible.length > 0 && visible.every((i) => picked.has(i));
    setState({
      selectedRooms: allOn ? [...picked].filter((i) => !visible.includes(i)) : [...new Set([...picked, ...visible])],
    });
    return;
  }
  if (act === "bulk-delete") {
    if (!(state.selectedRooms || []).length) return;
    askConfirm({ kind: "delete-rooms" });
    return;
  }
  if (act === "confirm-action") {
    const kind = state.confirm?.kind;
    if (kind === "delete-rooms") deleteSelectedRooms();
    else if (kind === "delete-room") deleteRoomAt(Number(state.confirm.index));
    else if (kind === "delete-properties") deleteSelectedProperties(state.confirm.ids);
    else if (kind === "unpair") unpairSelectedDevice();
    else setState({ modal: null, confirm: null });
    return;
  }
  if (act === "bulk-move") {
    if (!(state.selectedRooms || []).length) return;
    if (state.floors.length < 2) {
      flashToast("Add a floor", "Create another floor before moving rooms.", "error");
      return;
    }
    setState({ modal: "move-rooms" });
    return;
  }
  if (act === "confirm-move-rooms") {
    const dest = document.getElementById("move-floor")?.value;
    moveSelectedRooms(dest);
    return;
  }
  if (act === "bulk-edit") {
    if (!(state.selectedRooms || []).length) return;
    setState({ modal: "bulk-edit" });
    return;
  }
  if (act === "confirm-bulk-edit") {
    bulkRenameSelected(document.getElementById("bulk-room-name")?.value);
    return;
  }
  if (act === "new-property") {
    state.floors = [];
    state.devices = [];
    state.deviceScan = "idle";
    state.arcStatus = "offline";
    state.property = { ...blankState().property, type: currentMode().type };
    state.addingProperty = true;
    state.reviewing = false;
    state.selectedDevice = null;
    state.previewProperty = null;
    state.selectedFloor = 0;
    state.selectedRoom = 0;
    state.propMenu = false;
    state.formTouched = {};
    state.coach = null;
    state.suggestions = [];
    state.uploadCad = false;
    state.uploadPlan = null;
    state.selectedRooms = [];
    go("property");
  }
});

document.addEventListener("input", (e) => {
  const bind = e.target.dataset.bind;
  if (bind) {
    if (bind === "search") {
      state.search = e.target.value;
      return;
    }
    if (bind === "clientQuery") {
      const start = e.target.selectionStart;
      state.clientQuery = e.target.value;
      render();
      const el = document.querySelector("[data-bind=clientQuery]");
      if (el) {
        el.focus();
        el.setSelectionRange(start, start);
      }
      return;
    }
    if (bind === "navSearch") {
      const start = e.target.selectionStart;
      state.navSearch = e.target.value;
      if (state.screen === "rooms") state.search = e.target.value;
      render();
      const el = document.querySelector("[data-bind=navSearch]");
      if (el) {
        el.focus();
        el.setSelectionRange(start, start);
      }
      return;
    }
    const keys = bind.split(".");
    let cur = state;
    for (let i = 0; i < keys.length - 1; i++) {
      if (cur[keys[i]] == null) return;
      cur = cur[keys[i]];
    }
    cur[keys[keys.length - 1]] = e.target.value;
    if (bind.startsWith("property.")) {
      syncPropertyField(e.target);
      syncPropertyNext();
    }
  }
  if (e.target.dataset.room != null) {
    const i = Number(e.target.dataset.room);
    renameRoomAt(i, e.target.value);
    document.querySelectorAll(`[data-room="${i}"]`).forEach((el) => {
      if (el !== e.target) el.value = e.target.value;
    });
    return;
  }
  if (e.target.dataset.deviceNum != null || e.target.dataset.intensity != null) {
    const field = e.target.dataset.deviceNum || "intensity";
    const value = Number(e.target.value);
    const id = e.target.dataset.intensity || state.selectedDevice;
    const patch = { [field]: value };
    if (field === "targetTemp" || field === "volume" || field === "shadePos") patch.intensity = value;
    if (field === "volume") patch.muted = false;
    const next = mutateDevice(id, patch);
    state.devices = next.devices;
    state.properties = next.properties;
    const live = e.target.closest(".sheet-slider")?.querySelector("[data-live]");
    if (live) live.textContent = formatSheetLive(e.target.dataset.liveFmt, value);
    const stepper = document.querySelector(`.sheet-stepper [data-live="${field}"]`);
    if (stepper) stepper.textContent = formatSheetLive(e.target.dataset.liveFmt, value);
    if (field === "kelvin") {
      document.querySelectorAll(".sheet-swatch").forEach((btn) => {
        btn.classList.toggle("is-on", Number(btn.dataset.value) === value);
      });
    }
    return;
  }
  if (e.target.dataset.deviceField) {
    const next = mutateDevice(state.selectedDevice, { [e.target.dataset.deviceField]: e.target.value });
    state.devices = next.devices;
    state.properties = next.properties;
    return;
  }
});

document.addEventListener("change", (e) => {
  if (e.target.id === "file-input" && e.target.files?.length) {
    startUpload(e.target.files);
    return;
  }
  if (e.target.id === "cover-input" && e.target.files?.[0]) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPropertyCover(reader.result);
      flashToast("Photo updated", "This image is now the property header.");
    };
    reader.readAsDataURL(file);
    e.target.value = "";
    return;
  }
  const bind = e.target.dataset.bind;
  if (bind) {
    const keys = bind.split(".");
    let cur = state;
    for (let i = 0; i < keys.length - 1; i++) cur = cur[keys[i]];
    cur[keys[keys.length - 1]] = e.target.value;
  }
  if (e.target.dataset.room != null) {
    persistLayout();
    return;
  }
  if (e.target.dataset.device != null) {
    state.devices[Number(e.target.dataset.device)].room = e.target.value;
  }
  if (e.target.dataset.deviceField) {
    const next = mutateDevice(state.selectedDevice, { [e.target.dataset.deviceField]: e.target.value });
    state.devices = next.devices;
    state.properties = next.properties;
  }
});

document.addEventListener("focusout", (e) => {
  const bind = e.target?.dataset?.bind;
  if (!PROPERTY_REQUIRED.includes(bind)) return;
  state.formTouched = { ...(state.formTouched || {}), [bind]: true };
  syncPropertyField(e.target);
  syncPropertyNext();
});

document.addEventListener("submit", (e) => {
  const form = e.target.closest("[data-form]");
  if (!form) return;
  e.preventDefault();
  if (form.dataset.form === "signin") {
    const email = form.querySelector("[name=email]")?.value || state.account.email;
    if (!String(email).includes("@")) {
      flashToast("Sign in failed", "Enter a valid email.", "error");
      return;
    }
    seedCompletedProperty();
    flashToast("Signed in", "Welcome back.");
  }
});

document.addEventListener("toggle", (e) => {
  const acc = e.target;
  if (!(acc instanceof HTMLDetailsElement) || !acc.classList.contains("sheet-acc")) return;
  const key = acc.dataset.section;
  if (!key) return;
  state.sheetAccord = { ...(state.sheetAccord || {}), [key]: acc.open };
}, true);

document.addEventListener("keydown", (e) => {
  if (e.target.dataset?.room != null) {
    if (e.key === "Enter") {
      e.preventDefault();
      persistLayout();
      setState({ editingRoom: null });
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      persistLayout();
      setState({ editingRoom: null });
      return;
    }
  }
  if (e.key === "Enter" && state.modal === "device-name" && e.target.id === "device-name-edit") {
    e.preventDefault();
    document.querySelector('[data-action="save-device-name"]')?.click();
    return;
  }
  if (e.key !== "Escape") return;
  if (state.jemmMenu) {
    e.preventDefault();
    setState({ jemmMenu: false });
    return;
  }
  if (state.modal || state.showHelp || state.jemmVideo) return;
  if (state.selectedDevice) {
    e.preventDefault();
    closeDeviceSheet();
  }
});

window.addEventListener("beforeunload", (e) => {
  if (isOnboarding() && !state.reviewing && state.modal !== "leave") {
    e.preventDefault();
    e.returnValue = "";
  }
});

window.addEventListener("resize", positionCoach);
document.addEventListener("scroll", positionCoach, true);

(function boot() {
  applyTheme(loadTheme());
  const session = loadSession();
  if (session?.loggedIn) {
    state.loggedIn = true;
    if (session.account) state.account = { ...state.account, ...session.account };
    if (session.properties) state.properties = mergeExampleProperties(session.properties);
    else state.properties = exampleProperties();
    persistSession();
    state.draft = loadDraft();
    state.screen = "dashboard";
  }
  render();
})();

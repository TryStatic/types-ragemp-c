/// <reference path="enums.d.ts" />
/// <reference path="natives.d.ts" />
/// <reference path="ped_hashes.d.ts" />
/// <reference path="vehicle_hashes.d.ts" />
/// <reference path="weapon_hashes.d.ts" />

// -------------------------------------------------------------------------
// Custom types
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
// Main MP interfaces
// -------------------------------------------------------------------------

interface Mp {
	events: EventMpPool;
	trigger: (eventName: string, ...params: any[]) => void;
}

interface EventMpPool {
	callProc(eventName: string, ...args: any[]): Promise<any>;
}

// -------------------------------------------------------------------------
// Vars
// -------------------------------------------------------------------------

declare const mp: Mp;

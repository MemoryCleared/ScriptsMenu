#pragma strict

//Boutton Multiplayer
public var textButtonMulti : String = "Multiplayer";
public var ButtonMultiWidth : int = 280;
public var ButtonMultiHeight : int = 30;

//Boutton Solo
public var textButtonSolo : String = "Singleplayer";
public var ButtonSoloWidth : int = 280;
public var ButtonSoloHeight : int = 30;

//taille de la vertical box
public var VerticalBoxWidth : int = 0;
public var VerticalBoxHeight : int = 0;

//IPConfig
public var ConnectIP : String = "127.0.0.1";
public var OfficialServersListenPort : String = "25000";
public var OfficialServerIP1 : String = "127.0.0.1";
public var OfficialServerIP2 : String = "127.0.0.1";
public var OfficialServerIP3 : String = "127.0.0.1";
public var OfficialServerIP4 : String = "127.0.0.1";
private var OfficialServerIPChose : String = "127.0.0.1";

//Variables Fonction Connection()
/*
private var CoIP : String = OfficialServerIPChose;
private var CoPort : int = OfficialServersListenPort;
*/

//gestion des menus
private var MainMenu : boolean = true;
private var MultiMenu : boolean = false;
//private var SoloMenu : boolean = false;
private var AdvMultiMenu : boolean = false;

public var registeredGameName : String = "SC_MemoryCleared_testServer";

function OnGUI(){
	if(MainMenu == true){
		GUI.BeginGroup(new Rect(Screen.width / 2 - 150, Screen.height / 2 - 50, 300, 100));
		GUILayout.BeginVertical("Box", GUILayout.Width(VerticalBoxWidth), GUILayout.Height(VerticalBoxHeight));
		if(GUILayout.Button(textButtonMulti, GUILayout.Width(ButtonMultiWidth), GUILayout.Height(ButtonMultiHeight))){
			MultiMenu = true;
			MainMenu = false;
		}
		if(GUILayout.Button(textButtonSolo, GUILayout.Width(ButtonSoloWidth), GUILayout.Height(ButtonSoloHeight))){
			StartSolo();
		}
		GUILayout.EndVertical();
		GUI.EndGroup();
	}
	if(MultiMenu == true){
		GUI.BeginGroup(new Rect(Screen.width / 2 - 150, Screen.height / 2 - 75, 300, 150));
		GUILayout.BeginVertical("Box", GUILayout.Width(VerticalBoxWidth), GUILayout.Height(VerticalBoxHeight));
		if(GUILayout.Button("Connect to an Official Server", GUILayout.Width(ButtonMultiWidth), GUILayout.Height(ButtonMultiHeight))){
			OfficialServerConnection();
		}
		if(GUILayout.Button("Advenced", GUILayout.Width(ButtonSoloWidth), GUILayout.Height(ButtonSoloHeight))){
			AdvMultiMenu = true;
			MultiMenu = false;
		}
		
		
		// /!\ATTENTION /!\ a supprimer
		if(GUILayout.Button("Start Local Server BE DEL", GUILayout.Width(ButtonSoloWidth), GUILayout.Height(ButtonSoloHeight))){
			StartLocalServerFunc();
		}
		
		GUILayout.EndVertical();
		GUI.EndGroup();
	}
	if(AdvMultiMenu == true){
		GUI.BeginGroup(new Rect(Screen.width / 2 - 150, Screen.height / 2 - 50, 300, 100));
		GUILayout.BeginVertical("Box", GUILayout.Width(VerticalBoxWidth), GUILayout.Height(VerticalBoxHeight));
		GUILayout.Label("Server IP :");
		ConnectIP = GUILayout.TextField(ConnectIP, 21);
		if(GUILayout.Button("Connect", GUILayout.Width(ButtonSoloWidth), GUILayout.Height(ButtonSoloHeight))){
		
		}
		GUILayout.EndVertical();
		GUI.EndGroup();
	}
}

function StartSolo(){
	Application.LoadLevel("lvl1");
}

/*fonction de connection au serveur
function Connection(CoIP, CoPort ){
	Network.Connect( CoIP, CoPort );
}*/

function OfficialServerConnection(){
	Network.Connect( OfficialServerIP1, OfficialServersListenPort );
	Debug.Log("Connected");
}

function StartLocalServerFunc(){
	//var useNat = !Network.HavePublicAddress();
	//Network.InitializeServer(32, 2500, useNat);
	//Debug.Log("Server Initialised");
	Network.InitializeServer (10, 25000, false);
	MasterServer.RegisterHost (registeredGameName, "Memory Cleared Server Alpha", "test multi");
	Network.maxConnections = 10;
}

function OnServerInitialized() {

    Debug.Log("Server initialized and ready");

}

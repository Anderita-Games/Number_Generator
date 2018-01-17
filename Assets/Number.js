#pragma strict
var number : UnityEngine.UI.Text;
var Before : UnityEngine.UI.InputField;
var After : UnityEngine.UI.InputField;
var dee : String;
var deez : int;
var deez1 : int;
function Start () {

}

function Update () {

}

function Randomize () {
	deez = int.Parse(Before.text);
	var rnumber = Random.Range(int.Parse(Before.text),int.Parse(After.text) + 1);
	number.text = rnumber.ToString();
	Debug.Log (number);
}
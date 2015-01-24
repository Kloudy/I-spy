package com.example.exampleproject;

import org.apache.cordova.DroidGap;

import android.os.Bundle;
import android.view.Menu;
import android.webkit.WebView;

public class MainActivity extends DroidGap {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		WebView.setWebContentsDebuggingEnabled(true);
		
		super.loadUrl("file:///android_asset/www/index.html");
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}

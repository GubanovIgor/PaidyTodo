package com.paidytodoapp.modules

import android.content.Intent
import android.provider.Settings
import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class OpenSecureSettingsModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "OpenSecureSettings"
    }

    @ReactMethod
    fun openSecureSettings() {
        try {
            val intent = Intent(Settings.ACTION_SECURITY_SETTINGS)
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
            reactApplicationContext.startActivity(intent)
        } catch (e: Exception) {
            Toast.makeText(reactApplicationContext, "Failed to open Security Settings", Toast.LENGTH_SHORT).show()
        }
    }
}

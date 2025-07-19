export const languages = {
  en: {
    name: 'English',
    messages: {
      // Command descriptions
      'cmd.list.description': 'List all operations in the current Claude Code session',
      'cmd.undo.description': 'Undo operations from the current Claude Code session',
      'cmd.redo.description': 'Redo previously undone operations',
      'cmd.preview.description': 'Preview what would be undone without making changes',
      'cmd.sessions.description': 'List all available Claude Code sessions',
      'cmd.session.description': 'Switch to a different session',
      'cmd.language.description': 'Set the interface language',
      
      // Options
      'opt.all': 'Show all operations including undone ones',
      'opt.session': 'Specify session ID',
      'opt.claude': 'Show operations from Claude Code session (default)',
      'opt.local': 'Show operations from local ccundo tracking',
      'opt.yes': 'Skip confirmation',
      
      // Messages
      'msg.no_active_session': 'No active Claude Code session found in this directory.',
      'msg.make_sure_directory': 'Make sure you are in a directory where Claude Code has been used.',
      'msg.no_local_session': 'No local ccundo session found.',
      'msg.no_operations': 'No operations found.',
      'msg.no_operations_to_undo': 'No operations to undo.',
      'msg.no_operations_to_redo': 'No operations to redo.',
      'msg.operation_not_found': 'Operation {id} not found.',
      'msg.already_undone': 'This operation has already been undone.',
      'msg.undo_cancelled': 'Undo cancelled.',
      'msg.no_sessions_found': 'No Claude Code sessions found.',
      'msg.no_local_sessions': 'No local sessions found.',
      'msg.language_set': 'Language set to {language}.',
      'msg.language_invalid': 'Invalid language. Available languages: {languages}',
      
      // Prompts
      'prompt.select_operation_undo': 'Select operation to undo:',
      'prompt.select_operation_redo': 'Select operation to redo:',
      'prompt.select_operation_preview': 'Select operation to preview:',
      'prompt.confirm_undo': 'Are you sure you want to undo these {count} operations?',
      'prompt.confirm_redo': 'Are you sure you want to redo these {count} operations?',
      'prompt.cascading_warning': '⚠️  Cascading undo: Selecting an operation will undo it and ALL operations that came after it.',
      
      // Operation types
      'op.file_create': 'file_create',
      'op.file_edit': 'file_edit',
      'op.file_delete': 'file_delete',
      'op.file_rename': 'file_rename',
      'op.directory_create': 'directory_create',
      'op.directory_delete': 'directory_delete',
      'op.bash_command': 'bash_command',
      
      // Operation actions
      'action.will_delete_file': 'Will delete file:',
      'action.will_revert_file': 'Will revert file:',
      'action.will_restore_file': 'Will restore file:',
      'action.will_rename_back': 'Will rename back:',
      'action.will_remove_directory': 'Will remove directory:',
      'action.will_restore_directory': 'Will restore directory:',
      'action.cannot_undo_bash': 'Cannot auto-undo bash command:',
      'action.manual_intervention': 'Manual intervention required',
      
      // Headers
      'header.operations_claude': 'Operations from Claude Code session:',
      'header.operations_local': 'Operations in local session {sessionId}:',
      'header.available_sessions_claude': 'Available Claude Code sessions:',
      'header.available_sessions_local': 'Available local sessions:',
      'header.preview': '📋 Preview: Would undo {count} operation(s):',
      'header.undoing': 'Undoing {count} operations...',
      'header.redoing': 'Redoing {count} operations...',
      'header.this_will_undo': 'This will undo {count} operation(s):',
      'header.this_will_redo': 'This will redo {count} operation(s):',
      
      // Status
      'status.active': '[ACTIVE]',
      'status.undone': '[UNDONE]',
      'status.current_content': 'Current content:',
      'status.content_to_restore': 'Content to restore:',
      'status.original_not_available': '(Original content not available from session)',
      'status.content_not_available': '(Content not available from session)',
      'status.completed': 'Completed: {success} successful, {failed} failed',
      
      // Time
      'time.seconds_ago': '{seconds}s ago',
      'time.minutes_ago': '{minutes}m ago',
      'time.hours_ago': '{hours}h ago',
      'time.days_ago': '{days}d ago',
      
      // Suffixes
      'suffix.more_operations': '(+ {count} more will be undone)',
      'suffix.more_would_be_undone': '(+ {count} more would be undone)',
      'suffix.tip_to_undo': '💡 To actually perform these undos, run: ccundo undo'
    }
  },
  
  ja: {
    name: '日本語',
    messages: {
      // Command descriptions
      'cmd.list.description': '現在のClaude Codeセッションのすべての操作を一覧表示',
      'cmd.undo.description': '現在のClaude Codeセッションの操作を元に戻す',
      'cmd.redo.description': '以前に元に戻した操作をやり直し',
      'cmd.preview.description': '変更を加えずに元に戻される内容をプレビュー',
      'cmd.sessions.description': '利用可能なすべてのClaude Codeセッションを一覧表示',
      'cmd.session.description': '別のセッションに切り替え',
      'cmd.language.description': 'インターフェース言語を設定',
      
      // Options
      'opt.all': '元に戻された操作も含めてすべての操作を表示',
      'opt.session': 'セッションIDを指定',
      'opt.claude': 'Claude Codeセッションの操作を表示（デフォルト）',
      'opt.local': 'ローカルccundo追跡の操作を表示',
      'opt.yes': '確認をスキップ',
      
      // Messages
      'msg.no_active_session': 'このディレクトリでアクティブなClaude Codeセッションが見つかりません。',
      'msg.make_sure_directory': 'Claude Codeが使用されたディレクトリにいることを確認してください。',
      'msg.no_local_session': 'ローカルccundoセッションが見つかりません。',
      'msg.no_operations': '操作が見つかりません。',
      'msg.no_operations_to_undo': '元に戻す操作がありません。',
      'msg.no_operations_to_redo': 'やり直す操作がありません。',
      'msg.operation_not_found': '操作 {id} が見つかりません。',
      'msg.already_undone': 'この操作は既に元に戻されています。',
      'msg.undo_cancelled': '元に戻す操作がキャンセルされました。',
      'msg.no_sessions_found': 'Claude Codeセッションが見つかりません。',
      'msg.no_local_sessions': 'ローカルセッションが見つかりません。',
      'msg.language_set': '言語が{language}に設定されました。',
      'msg.language_invalid': '無効な言語です。利用可能な言語: {languages}',
      
      // Prompts
      'prompt.select_operation_undo': '元に戻す操作を選択:',
      'prompt.select_operation_redo': 'やり直す操作を選択:',
      'prompt.select_operation_preview': 'プレビューする操作を選択:',
      'prompt.confirm_undo': 'これら{count}個の操作を本当に元に戻しますか？',
      'prompt.confirm_redo': 'これら{count}個の操作を本当にやり直しますか？',
      'prompt.cascading_warning': '⚠️  カスケード元に戻し: 操作を選択すると、その操作とその後のすべての操作が元に戻されます。',
      
      // Operation types
      'op.file_create': 'ファイル作成',
      'op.file_edit': 'ファイル編集',
      'op.file_delete': 'ファイル削除',
      'op.file_rename': 'ファイル名変更',
      'op.directory_create': 'ディレクトリ作成',
      'op.directory_delete': 'ディレクトリ削除',
      'op.bash_command': 'bashコマンド',
      
      // Operation actions
      'action.will_delete_file': 'ファイルを削除します:',
      'action.will_revert_file': 'ファイルを元に戻します:',
      'action.will_restore_file': 'ファイルを復元します:',
      'action.will_rename_back': '名前を元に戻します:',
      'action.will_remove_directory': 'ディレクトリを削除します:',
      'action.will_restore_directory': 'ディレクトリを復元します:',
      'action.cannot_undo_bash': 'bashコマンドを自動で元に戻せません:',
      'action.manual_intervention': '手動での対応が必要です',
      
      // Headers
      'header.operations_claude': 'Claude Codeセッションの操作:',
      'header.operations_local': 'ローカルセッション {sessionId} の操作:',
      'header.available_sessions_claude': '利用可能なClaude Codeセッション:',
      'header.available_sessions_local': '利用可能なローカルセッション:',
      'header.preview': '📋 プレビュー: {count}個の操作を元に戻します:',
      'header.undoing': '{count}個の操作を元に戻しています...',
      'header.redoing': '{count}個の操作をやり直しています...',
      'header.this_will_undo': 'これにより{count}個の操作が元に戻されます:',
      'header.this_will_redo': 'これにより{count}個の操作がやり直されます:',
      
      // Status
      'status.active': '[アクティブ]',
      'status.undone': '[元に戻し済み]',
      'status.current_content': '現在の内容:',
      'status.content_to_restore': '復元する内容:',
      'status.original_not_available': '（セッションから元の内容を取得できません）',
      'status.content_not_available': '（セッションから内容を取得できません）',
      'status.completed': '完了: {success}個成功、{failed}個失敗',
      
      // Time
      'time.seconds_ago': '{seconds}秒前',
      'time.minutes_ago': '{minutes}分前',
      'time.hours_ago': '{hours}時間前',
      'time.days_ago': '{days}日前',
      
      // Suffixes
      'suffix.more_operations': '（+ {count}個も元に戻されます）',
      'suffix.more_would_be_undone': '（+ {count}個も元に戻されます）',
      'suffix.tip_to_undo': '💡 実際に元に戻すには次を実行: ccundo undo'
    }
  },

  fr: {
    name: 'Français',
    messages: {
      // Command descriptions
      'cmd.list.description': 'Lister toutes les opérations de la session Claude Code actuelle',
      'cmd.undo.description': 'Annuler les opérations de la session Claude Code actuelle',
      'cmd.redo.description': 'Rétablir les opérations précédemment annulées',
      'cmd.preview.description': 'Prévisualiser ce qui serait annulé sans appliquer les changements',
      'cmd.sessions.description': 'Lister toutes les sessions Claude Code disponibles',
      'cmd.session.description': 'Changer de session',
      'cmd.language.description': 'Définir la langue de l\'interface',

      // Options
      'opt.all': 'Afficher toutes les opérations, y compris celles annulées',
      'opt.session': 'Spécifier l\'ID de session',
      'opt.claude': 'Afficher les opérations de la session Claude Code (par défaut)',
      'opt.local': 'Afficher les opérations du suivi local ccundo',
      'opt.yes': 'Ignorer la confirmation',

      // Messages
      'msg.no_active_session': 'Aucune session Claude Code active trouvée dans ce répertoire.',
      'msg.make_sure_directory': 'Assurez-vous d\'être dans un répertoire où Claude Code a été utilisé.',
      'msg.no_local_session': 'Aucune session ccundo locale trouvée.',
      'msg.no_operations': 'Aucune opération trouvée.',
      'msg.no_operations_to_undo': 'Aucune opération à annuler.',
      'msg.no_operations_to_redo': 'Aucune opération à rétablir.',
      'msg.operation_not_found': 'Opération {id} introuvable.',
      'msg.already_undone': 'Cette opération a déjà été annulée.',
      'msg.undo_cancelled': 'Annulation annulée.',
      'msg.no_sessions_found': 'Aucune session Claude Code trouvée.',
      'msg.no_local_sessions': 'Aucune session locale trouvée.',
      'msg.language_set': 'Langue définie sur {language}.',
      'msg.language_invalid': 'Langue invalide. Langues disponibles : {languages}',

      // Prompts
      'prompt.select_operation_undo': 'Sélectionner l\'opération à annuler :',
      'prompt.select_operation_redo': 'Sélectionner l\'opération à rétablir :',
      'prompt.select_operation_preview': 'Sélectionner l\'opération à prévisualiser :',
      'prompt.confirm_undo': 'Êtes-vous sûr de vouloir annuler ces {count} opérations ?',
      'prompt.confirm_redo': 'Êtes-vous sûr de vouloir rétablir ces {count} opérations ?',
      'prompt.cascading_warning': '⚠️ Annulation en cascade : Sélectionner une opération l\'annulera ainsi que TOUTES les opérations qui l\'ont suivie.',

      // Operation types
      'op.file_create': 'création_fichier',
      'op.file_edit': 'édition_fichier',
      'op.file_delete': 'suppression_fichier',
      'op.file_rename': 'renommage_fichier',
      'op.directory_create': 'création_répertoire',
      'op.directory_delete': 'suppression_répertoire',
      'op.bash_command': 'commande_bash',

      // Operation actions
      'action.will_delete_file': 'Va supprimer le fichier :',
      'action.will_revert_file': 'Va annuler les modifications du fichier :',
      'action.will_restore_file': 'Va restaurer le fichier :',
      'action.will_rename_back': 'Va renommer en arrière :',
      'action.will_remove_directory': 'Va supprimer le répertoire :',
      'action.will_restore_directory': 'Va restaurer le répertoire :',
      'action.cannot_undo_bash': 'Impossible d\'annuler automatiquement la commande bash :',
      'action.manual_intervention': 'Intervention manuelle requise',

      // Headers
      'header.operations_claude': 'Opérations de la session Claude Code :',
      'header.operations_local': 'Opérations de la session locale {sessionId} :',
      'header.available_sessions_claude': 'Sessions Claude Code disponibles :',
      'header.available_sessions_local': 'Sessions locales disponibles :',
      'header.preview': '📋 Prévisualisation : Annulerait {count} opération(s) :',
      'header.undoing': 'Annulation de {count} opérations...',
      'header.redoing': 'Rétablissement de {count} opérations...',
      'header.this_will_undo': 'Ceci annulera {count} opération(s) :',
      'header.this_will_redo': 'Ceci rétablira {count} opération(s) :',

      // Status
      'status.active': '[ACTIF]',
      'status.undone': '[ANNULÉ]',
      'status.current_content': 'Contenu actuel :',
      'status.content_to_restore': 'Contenu à restaurer :',
      'status.original_not_available': '(Contenu original non disponible depuis la session)',
      'status.content_not_available': '(Contenu non disponible depuis la session)',
      'status.completed': 'Terminé : {success} réussi(s), {failed} échoué(s)',

      // Time
      'time.seconds_ago': 'il y a {seconds}s',
      'time.minutes_ago': 'il y a {minutes}m',
      'time.hours_ago': 'il y a {hours}h',
      'time.days_ago': 'il y a {days}j',

      // Suffixes
      'suffix.more_operations': '(+ {count} de plus seront annulées)',
      'suffix.more_would_be_undone': '(+ {count} de plus seraient annulées)',
      'suffix.tip_to_undo': '💡 Pour effectuer réellement ces annulations, exécutez : ccundo undo'
    }
  },

  es: {
    name: 'Español',
    messages: {
      // Command descriptions
      'cmd.list.description': 'Listar todas las operaciones en la sesión actual de Claude Code',
      'cmd.undo.description': 'Deshacer operaciones de la sesión actual de Claude Code',
      'cmd.redo.description': 'Rehacer operaciones previamente deshechas',
      'cmd.preview.description': 'Previsualizar lo que se desharía sin hacer cambios',
      'cmd.sessions.description': 'Listar todas las sesiones de Claude Code disponibles',
      'cmd.session.description': 'Cambiar a una sesión diferente',
      'cmd.language.description': 'Establecer el idioma de la interfaz',

      // Options
      'opt.all': 'Mostrar todas las operaciones, incluidas las deshechas',
      'opt.session': 'Especificar ID de sesión',
      'opt.claude': 'Mostrar operaciones de la sesión de Claude Code (predeterminado)',
      'opt.local': 'Mostrar operaciones del seguimiento local de ccundo',
      'opt.yes': 'Omitir confirmación',

      // Messages
      'msg.no_active_session': 'No se encontró ninguna sesión activa de Claude Code en este directorio.',
      'msg.make_sure_directory': 'Asegúrate de estar en un directorio donde se haya usado Claude Code.',
      'msg.no_local_session': 'No se encontró ninguna sesión local de ccundo.',
      'msg.no_operations': 'No se encontraron operaciones.',
      'msg.no_operations_to_undo': 'No hay operaciones para deshacer.',
      'msg.no_operations_to_redo': 'No hay operaciones para rehacer.',
      'msg.operation_not_found': 'Operación {id} no encontrada.',
      'msg.already_undone': 'Esta operación ya ha sido deshecha.',
      'msg.undo_cancelled': 'Deshacer cancelado.',
      'msg.no_sessions_found': 'No se encontraron sesiones de Claude Code.',
      'msg.no_local_sessions': 'No se encontraron sesiones locales.',
      'msg.language_set': 'Idioma establecido a {language}.',
      'msg.language_invalid': 'Idioma inválido. Idiomas disponibles: {languages}',

      // Prompts
      'prompt.select_operation_undo': 'Seleccionar operación para deshacer:',
      'prompt.select_operation_redo': 'Seleccionar operación para rehacer:',
      'prompt.select_operation_preview': 'Seleccionar operación para previsualizar:',
      'prompt.confirm_undo': '¿Estás seguro de que quieres deshacer estas {count} operaciones?',
      'prompt.confirm_redo': '¿Estás seguro de que quieres rehacer estas {count} operaciones?',
      'prompt.cascading_warning': '⚠️ Deshacer en cascada: Seleccionar una operación la deshará a ella y a TODAS las operaciones que vinieron después.',

      // Operation types
      'op.file_create': 'creación_archivo',
      'op.file_edit': 'edición_archivo',
      'op.file_delete': 'eliminación_archivo',
      'op.file_rename': 'renombrar_archivo',
      'op.directory_create': 'creación_directorio',
      'op.directory_delete': 'eliminación_directorio',
      'op.bash_command': 'comando_bash',

      // Operation actions
      'action.will_delete_file': 'Se eliminará el archivo:',
      'action.will_revert_file': 'Se revertirá el archivo:',
      'action.will_restore_file': 'Se restaurará el archivo:',
      'action.will_rename_back': 'Se renombrará de vuelta:',
      'action.will_remove_directory': 'Se eliminará el directorio:',
      'action.will_restore_directory': 'Se restaurará el directorio:',
      'action.cannot_undo_bash': 'No se puede deshacer automáticamente el comando bash:',
      'action.manual_intervention': 'Intervención manual requerida',

      // Headers
      'header.operations_claude': 'Operaciones de la sesión de Claude Code:',
      'header.operations_local': 'Operaciones en la sesión local {sessionId}:',
      'header.available_sessions_claude': 'Sesiones de Claude Code disponibles:',
      'header.available_sessions_local': 'Sesiones locales disponibles:',
      'header.preview': '📋 Previsualización: Desharía {count} operación(es):',
      'header.undoing': 'Deshaciendo {count} operaciones...',
      'header.redoing': 'Rehaciendo {count} operaciones...',
      'header.this_will_undo': 'Esto deshará {count} operación(es):',
      'header.this_will_redo': 'Esto rehacerá {count} operación(es):',

      // Status
      'status.active': '[ACTIVO]',
      'status.undone': '[DESHECHO]',
      'status.current_content': 'Contenido actual:',
      'status.content_to_restore': 'Contenido a restaurar:',
      'status.original_not_available': '(Contenido original no disponible desde la sesión)',
      'status.content_not_available': '(Contenido no disponible desde la sesión)',
      'status.completed': 'Completado: {success} exitoso(s), {failed} fallido(s)',

      // Time
      'time.seconds_ago': 'hace {seconds}s',
      'time.minutes_ago': 'hace {minutes}m',
      'time.hours_ago': 'hace {hours}h',
      'time.days_ago': 'hace {days}d',

      // Suffixes
      'suffix.more_operations': '(+ {count} más serán deshechas)',
      'suffix.more_would_be_undone': '(+ {count} más serían deshechas)',
      'suffix.tip_to_undo': '💡 Para realizar realmente estos deshacer, ejecuta: ccundo undo'
    }
  },

  de: {
    name: 'Deutsch',
    messages: {
      // Command descriptions
      'cmd.list.description': 'Alle Operationen in der aktuellen Claude Code Sitzung auflisten',
      'cmd.undo.description': 'Operationen aus der aktuellen Claude Code Sitzung rückgängig machen',
      'cmd.redo.description': 'Zuvor rückgängig gemachte Operationen wiederherstellen',
      'cmd.preview.description': 'Vorschau anzeigen, was rückgängig gemacht würde, ohne Änderungen vorzunehmen',
      'cmd.sessions.description': 'Alle verfügbaren Claude Code Sitzungen auflisten',
      'cmd.session.description': 'Zu einer anderen Sitzung wechseln',
      'cmd.language.description': 'Die Sprache der Benutzeroberfläche einstellen',

      // Options
      'opt.all': 'Alle Operationen anzeigen, einschließlich der rückgängig gemachten',
      'opt.session': 'Sitzungs-ID angeben',
      'opt.claude': 'Operationen aus der Claude Code Sitzung anzeigen (Standard)',
      'opt.local': 'Operationen aus der lokalen ccundo Verfolgung anzeigen',
      'opt.yes': 'Bestätigung überspringen',

      // Messages
      'msg.no_active_session': 'Keine aktive Claude Code Sitzung in diesem Verzeichnis gefunden.',
      'msg.make_sure_directory': 'Stellen Sie sicher, dass Sie sich in einem Verzeichnis befinden, in dem Claude Code verwendet wurde.',
      'msg.no_local_session': 'Keine lokale ccundo Sitzung gefunden.',
      'msg.no_operations': 'Keine Operationen gefunden.',
      'msg.no_operations_to_undo': 'Keine Operationen zum Rückgängigmachen vorhanden.',
      'msg.no_operations_to_redo': 'Keine Operationen zum Wiederherstellen vorhanden.',
      'msg.operation_not_found': 'Operation {id} nicht gefunden.',
      'msg.already_undone': 'Diese Operation wurde bereits rückgängig gemacht.',
      'msg.undo_cancelled': 'Rückgängigmachen abgebrochen.',
      'msg.no_sessions_found': 'Keine Claude Code Sitzungen gefunden.',
      'msg.no_local_sessions': 'Keine lokalen Sitzungen gefunden.',
      'msg.language_set': 'Sprache auf {language} eingestellt.',
      'msg.language_invalid': 'Ungültige Sprache. Verfügbare Sprachen: {languages}',

      // Prompts
      'prompt.select_operation_undo': 'Operation zum Rückgängigmachen auswählen:',
      'prompt.select_operation_redo': 'Operation zum Wiederherstellen auswählen:',
      'prompt.select_operation_preview': 'Operation zur Vorschau auswählen:',
      'prompt.confirm_undo': 'Sind Sie sicher, dass Sie diese {count} Operationen rückgängig machen möchten?',
      'prompt.confirm_redo': 'Sind Sie sicher, dass Sie diese {count} Operationen wiederherstellen möchten?',
      'prompt.cascading_warning': '⚠️ Kaskadierendes Rückgängigmachen: Das Auswählen einer Operation macht diese und ALLE nachfolgenden Operationen rückgängig.',

      // Operation types
      'op.file_create': 'Datei_erstellen',
      'op.file_edit': 'Datei_bearbeiten',
      'op.file_delete': 'Datei_löschen',
      'op.file_rename': 'Datei_umbenennen',
      'op.directory_create': 'Verzeichnis_erstellen',
      'op.directory_delete': 'Verzeichnis_löschen',
      'op.bash_command': 'bash_Befehl',

      // Operation actions
      'action.will_delete_file': 'Wird Datei löschen:',
      'action.will_revert_file': 'Wird Datei zurücksetzen:',
      'action.will_restore_file': 'Wird Datei wiederherstellen:',
      'action.will_rename_back': 'Wird zurück umbenennen:',
      'action.will_remove_directory': 'Wird Verzeichnis entfernen:',
      'action.will_restore_directory': 'Wird Verzeichnis wiederherstellen:',
      'action.cannot_undo_bash': 'Kann bash Befehl nicht automatisch rückgängig machen:',
      'action.manual_intervention': 'Manuelle Intervention erforderlich',

      // Headers
      'header.operations_claude': 'Operationen aus der Claude Code Sitzung:',
      'header.operations_local': 'Operationen in lokaler Sitzung {sessionId}:',
      'header.available_sessions_claude': 'Verfügbare Claude Code Sitzungen:',
      'header.available_sessions_local': 'Verfügbare lokale Sitzungen:',
      'header.preview': '📋 Vorschau: Würde {count} Operation(en) rückgängig machen:',
      'header.undoing': 'Mache {count} Operationen rückgängig...',
      'header.redoing': 'Stelle {count} Operationen wieder her...',
      'header.this_will_undo': 'Dies wird {count} Operation(en) rückgängig machen:',
      'header.this_will_redo': 'Dies wird {count} Operation(en) wiederherstellen:',

      // Status
      'status.active': '[AKTIV]',
      'status.undone': '[RÜCKGÄNGIG]',
      'status.current_content': 'Aktueller Inhalt:',
      'status.content_to_restore': 'Wiederherzustellender Inhalt:',
      'status.original_not_available': '(Originalinhalt nicht aus Sitzung verfügbar)',
      'status.content_not_available': '(Inhalt nicht aus Sitzung verfügbar)',
      'status.completed': 'Abgeschlossen: {success} erfolgreich, {failed} fehlgeschlagen',

      // Time
      'time.seconds_ago': 'vor {seconds}s',
      'time.minutes_ago': 'vor {minutes}m',
      'time.hours_ago': 'vor {hours}h',
      'time.days_ago': 'vor {days}T',

      // Suffixes
      'suffix.more_operations': '(+ {count} weitere werden rückgängig gemacht)',
      'suffix.more_would_be_undone': '(+ {count} weitere würden rückgängig gemacht)',
      'suffix.tip_to_undo': '💡 Um diese Rückgängigmachungen tatsächlich durchzuführen, führe aus: ccundo undo'
    }
  },

  zh: {
    name: '简体中文',
    messages: {
      // Command descriptions
      'cmd.list.description': '列出当前 Claude Code 会话中的所有操作',
      'cmd.undo.description': '撤销当前 Claude Code 会话中的操作',
      'cmd.redo.description': '重做之前撤销的操作',
      'cmd.preview.description': '预览将要撤销的内容，但不进行更改',
      'cmd.sessions.description': '列出所有可用的 Claude Code 会话',
      'cmd.session.description': '切换到不同的会话',
      'cmd.language.description': '设置界面语言',

      // Options
      'opt.all': '显示所有操作，包括已撤销的',
      'opt.session': '指定会话 ID',
      'opt.claude': '显示 Claude Code 会话的操作（默认）',
      'opt.local': '显示本地 ccundo 跟踪的操作',
      'opt.yes': '跳过确认',

      // Messages
      'msg.no_active_session': '在此目录中未找到活动的 Claude Code 会话。',
      'msg.make_sure_directory': '请确保您在已使用 Claude Code 的目录中。',
      'msg.no_local_session': '未找到本地 ccundo 会话。',
      'msg.no_operations': '未找到操作。',
      'msg.no_operations_to_undo': '没有可撤销的操作。',
      'msg.no_operations_to_redo': '没有可重做的操作。',
      'msg.operation_not_found': '未找到操作 {id}。',
      'msg.already_undone': '此操作已被撤销。',
      'msg.undo_cancelled': '撤销已取消。',
      'msg.no_sessions_found': '未找到 Claude Code 会话。',
      'msg.no_local_sessions': '未找到本地会话。',
      'msg.language_set': '语言已设置为 {language}。',
      'msg.language_invalid': '无效的语言。可用语言：{languages}',

      // Prompts
      'prompt.select_operation_undo': '选择要撤销的操作：',
      'prompt.select_operation_redo': '选择要重做的操作：',
      'prompt.select_operation_preview': '选择要预览的操作：',
      'prompt.confirm_undo': '确定要撤销这 {count} 个操作吗？',
      'prompt.confirm_redo': '确定要重做这 {count} 个操作吗？',
      'prompt.cascading_warning': '⚠️ 级联撤销：选择一个操作将撤销该操作及其之后的所有操作。',

      // Operation types
      'op.file_create': '创建文件',
      'op.file_edit': '编辑文件',
      'op.file_delete': '删除文件',
      'op.file_rename': '重命名文件',
      'op.directory_create': '创建目录',
      'op.directory_delete': '删除目录',
      'op.bash_command': 'bash 命令',

      // Operation actions
      'action.will_delete_file': '将删除文件：',
      'action.will_revert_file': '将还原文件：',
      'action.will_restore_file': '将恢复文件：',
      'action.will_rename_back': '将重命名回：',
      'action.will_remove_directory': '将删除目录：',
      'action.will_restore_directory': '将恢复目录：',
      'action.cannot_undo_bash': '无法自动撤销 bash 命令：',
      'action.manual_intervention': '需要手动干预',

      // Headers
      'header.operations_claude': 'Claude Code 会话的操作：',
      'header.operations_local': '本地会话 {sessionId} 的操作：',
      'header.available_sessions_claude': '可用的 Claude Code 会话：',
      'header.available_sessions_local': '可用的本地会话：',
      'header.preview': '📋 预览：将撤销 {count} 个操作：',
      'header.undoing': '正在撤销 {count} 个操作...',
      'header.redoing': '正在重做 {count} 个操作...',
      'header.this_will_undo': '这将撤销 {count} 个操作：',
      'header.this_will_redo': '这将重做 {count} 个操作：',

      // Status
      'status.active': '[活动]',
      'status.undone': '[已撤销]',
      'status.current_content': '当前内容：',
      'status.content_to_restore': '要恢复的内容：',
      'status.original_not_available': '（会话中原始内容不可用）',
      'status.content_not_available': '（会话中内容不可用）',
      'status.completed': '完成：{success} 个成功，{failed} 个失败',

      // Time
      'time.seconds_ago': '{seconds} 秒前',
      'time.minutes_ago': '{minutes} 分钟前',
      'time.hours_ago': '{hours} 小时前',
      'time.days_ago': '{days} 天前',

      // Suffixes
      'suffix.more_operations': '（+ 还将撤销 {count} 个操作）',
      'suffix.more_would_be_undone': '（+ 还将撤销 {count} 个操作）',
      'suffix.tip_to_undo': '💡 要实际执行这些撤销，请运行：ccundo undo'
    }
  },

  tw: {
    name: '繁體中文',
    messages: {
      // Command descriptions
      'cmd.list.description': '列出目前 Claude Code 會話中的所有操作',
      'cmd.undo.description': '撤銷目前 Claude Code 會話中的操作',
      'cmd.redo.description': '重做之前撤銷的操作',
      'cmd.preview.description': '預覽將要撤銷的內容，但不進行更改',
      'cmd.sessions.description': '列出所有可用的 Claude Code 會話',
      'cmd.session.description': '切換到不同的會話',
      'cmd.language.description': '設定介面語言',

      // Options
      'opt.all': '顯示所有操作，包括已撤銷的',
      'opt.session': '指定會話 ID',
      'opt.claude': '顯示 Claude Code 會話的操作（預設）',
      'opt.local': '顯示本地 ccundo 跟踪的操作',
      'opt.yes': '跳過確認',

      // Messages
      'msg.no_active_session': '在此目錄中未找到活動的 Claude Code 會話。',
      'msg.make_sure_directory': '請確保您在使用過 Claude Code 的目錄中。',
      'msg.no_local_session': '未找到本地 ccundo 會話。',
      'msg.no_operations': '未找到操作。',
      'msg.no_operations_to_undo': '沒有可撤銷的操作。',
      'msg.no_operations_to_redo': '沒有可重做的操作。',
      'msg.operation_not_found': '未找到操作 {id}。',
      'msg.already_undone': '此操作已被撤銷。',
      'msg.undo_cancelled': '撤銷已取消。',
      'msg.no_sessions_found': '未找到 Claude Code 會話。',
      'msg.no_local_sessions': '未找到本地會話。',
      'msg.language_set': '語言已設定為 {language}。',
      'msg.language_invalid': '無效的語言。可用語言：{languages}',

      // Prompts
      'prompt.select_operation_undo': '選擇要撤銷的操作：',
      'prompt.select_operation_redo': '選擇要重做的操作：',
      'prompt.select_operation_preview': '選擇要預覽的操作：',
      'prompt.confirm_undo': '確定要撤銷這 {count} 個操作嗎？',
      'prompt.confirm_redo': '確定要重做這 {count} 個操作嗎？',
      'prompt.cascading_warning': '⚠️ 級聯撤銷：選擇一個操作將撤銷該操作及其之後的所有操作。',

      // Operation types
      'op.file_create': '創建文件',
      'op.file_edit': '編輯文件',
      'op.file_delete': '刪除文件',
      'op.file_rename': '重命名文件',
      'op.directory_create': '創建目錄',
      'op.directory_delete': '刪除目錄',
      'op.bash_command': 'bash 命令',

      // Operation actions
      'action.will_delete_file': '將刪除文件：',
      'action.will_revert_file': '將還原文件：',
      'action.will_restore_file': '將恢復文件：',
      'action.will_rename_back': '將重命名回：',
      'action.will_remove_directory': '將刪除目錄：',
      'action.will_restore_directory': '將恢復目錄：',
      'action.cannot_undo_bash': '無法自動撤銷 bash 命令：',
      'action.manual_intervention': '需要手動干預',

      // Headers
      'header.operations_claude': 'Claude Code 會話的操作：',
      'header.operations_local': '本地會話 {sessionId} 的操作：',
      'header.available_sessions_claude': '可用的 Claude Code 會話：',
      'header.available_sessions_local': '可用的本地會話：',
      'header.preview': '📋 預覽：將撤銷 {count} 個操作：',
      'header.undoing': '正在撤銷 {count} 個操作...',
      'header.redoing': '正在重做 {count} 個操作...',
      'header.this_will_undo': '這將撤銷 {count} 個操作：',
      'header.this_will_redo': '這將重做 {count} 個操作：',

      // Status
      'status.active': '[活動]',
      'status.undone': '[已撤銷]',
      'status.current_content': '當前內容：',
      'status.content_to_restore': '要恢復的內容：',
      'status.original_not_available': '（會話中原始內容不可用）',
      'status.content_not_available': '（會話中內容不可用）',
      'status.completed': '完成：{success} 個成功，{failed} 個失敗',

      // Time
      'time.seconds_ago': '{seconds} 秒前',
      'time.minutes_ago': '{minutes} 分鐘前',
      'time.hours_ago': '{hours} 小時前',
      'time.days_ago': '{days} 天前',

      // Suffixes
      'suffix.more_operations': '（+ 還將撤銷 {count} 個操作）',
      'suffix.more_would_be_undone': '（+ 還將撤銷 {count} 個操作）',
      'suffix.tip_to_undo': '💡 要實際執行這些撤銷，請運行：ccundo undo'
    }
  }
};